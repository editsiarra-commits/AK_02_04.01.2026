import { getDb } from './firebase';

// Reużycie konfiguracji EmailJS z formularza kontaktowego.
const EMAILJS_SERVICE_ID = 'service_ysjbvlk';
const EMAILJS_TEMPLATE_ID = 'template_xt849sr';
const EMAILJS_PUBLIC_KEY = 'URUpNfhAJLR9oGvKc';

export interface NewsletterSignup {
  email: string;
  phone?: string;
  consent: boolean;
  /** Zgoda na wykorzystanie danych do celów terapeutycznych (ścieżka QR). */
  therapeuticConsent?: boolean;
  /** Źródło zapisu, np. 'meditation_banner' lub 'qr'. */
  source?: string;
}

export async function subscribeToNewsletter({
  email,
  phone,
  consent,
  therapeuticConsent,
  source = 'meditation_banner',
}: NewsletterSignup): Promise<void> {
  const trimmedEmail = email.trim();
  const trimmedPhone = phone?.trim();

  // Dwa niezależne kanały zapisu leada uruchamiane równolegle:
  //   1. Firestore  – główne źródło prawdy (może być blokowane przez App Check,
  //      np. gdy domena nie jest dodana do klucza reCAPTCHA).
  //   2. EmailJS    – powiadomienie e-mail, niezależne od App Check.
  // Pobranie pliku ma ruszyć, jeśli KTÓRYKOLWIEK kanał się powiedzie, żeby
  // użytkownik nigdy nie utknął, a zgłoszenie nie przepadło.
  const [firestoreResult, emailResult] = await Promise.allSettled([
    saveToFirestore({ email: trimmedEmail, phone: trimmedPhone, consent, therapeuticConsent, source }),
    sendEmailNotification({ email: trimmedEmail, phone: trimmedPhone, consent, therapeuticConsent, source }),
  ]);

  if (firestoreResult.status === 'rejected') {
    console.error('Zapis do Firestore nie powiódł się:', firestoreResult.reason);
  }
  if (emailResult.status === 'rejected') {
    console.error('Powiadomienie EmailJS nie powiodło się:', emailResult.reason);
  }

  // Błąd zgłaszamy tylko wtedy, gdy ŻADEN kanał nie zapisał zgłoszenia.
  if (firestoreResult.status === 'rejected' && emailResult.status === 'rejected') {
    throw new Error('Nie udało się zapisać zgłoszenia (Firestore i EmailJS zawiodły).');
  }
}

async function saveToFirestore({
  email,
  phone,
  consent,
  therapeuticConsent,
  source,
}: NewsletterSignup): Promise<void> {
  // SDK Firestore ładowany leniwie, dopiero przy wysłaniu formularza.
  const [{ addDoc, collection, serverTimestamp }, db] = await Promise.all([
    import('firebase/firestore'),
    getDb(),
  ]);

  const data: Record<string, unknown> = {
    email,
    consent,
    source,
    createdAt: serverTimestamp(),
  };
  if (phone) data.phone = phone;
  if (therapeuticConsent) data.therapeuticConsent = true;

  await addDoc(collection(db, 'newsletter_signups'), data);
}

async function sendEmailNotification({
  email,
  phone,
  consent,
  therapeuticConsent,
  source,
}: NewsletterSignup): Promise<void> {
  const emailjs = (await import('@emailjs/browser')).default;
  await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      user_name: 'Zapis do newslettera (medytacja MP3)',
      user_email: email,
      subject: 'Nowy zapis do listy mailingowej',
      message:
        `Nowy zapis do newslettera:\n\n` +
        `Email: ${email}\n` +
        `Telefon: ${phone || '\u2014'}\n` +
        `Zgoda (newsletter): ${consent ? 'tak' : 'nie'}\n` +
        `Zgoda terapeutyczna: ${therapeuticConsent ? 'tak' : '\u2014'}\n` +
        `\u0179r\u00f3d\u0142o: ${source === 'qr' ? 'kod QR' : 'banner z medytacj\u0105'}`,
      reply_to: email,
      to_name: 'Agnieszka',
    },
    EMAILJS_PUBLIC_KEY,
  );
}
