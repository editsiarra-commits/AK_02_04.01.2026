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

  // SDK Firestore i EmailJS ładowane leniwie, dopiero przy wysłaniu formularza.
  const [{ addDoc, collection, serverTimestamp }, db] = await Promise.all([
    import('firebase/firestore'),
    getDb(),
  ]);

  const data: Record<string, unknown> = {
    email: trimmedEmail,
    consent,
    source,
    createdAt: serverTimestamp(),
  };
  if (trimmedPhone) data.phone = trimmedPhone;
  if (therapeuticConsent) data.therapeuticConsent = true;

  // 1. Zapis do Firestore – źródło prawdy listy mailingowej.
  await addDoc(collection(db, 'newsletter_signups'), data);

  // 2. Powiadomienie e-mail (best-effort – nie blokuje pobrania pliku).
  try {
    const emailjs = (await import('@emailjs/browser')).default;
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        user_name: 'Zapis do newslettera (medytacja MP3)',
        user_email: trimmedEmail,
        subject: 'Nowy zapis do listy mailingowej',
        message:
          `Nowy zapis do newslettera:\n\n` +
          `Email: ${trimmedEmail}\n` +
          `Telefon: ${trimmedPhone || '\u2014'}\n` +
          `Zgoda (newsletter): ${consent ? 'tak' : 'nie'}\n` +
          `Zgoda terapeutyczna: ${therapeuticConsent ? 'tak' : '\u2014'}\n` +
          `\u0179r\u00f3d\u0142o: ${source === 'qr' ? 'kod QR' : 'banner z medytacj\u0105'}`,
        reply_to: trimmedEmail,
        to_name: 'Agnieszka',
      },
      EMAILJS_PUBLIC_KEY,
    );
  } catch (err) {
    console.error('EmailJS notification failed (signup saved to Firestore):', err);
  }
}
