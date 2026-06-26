import type { Firestore } from 'firebase/firestore';

// Firebase web config – publiczne wartości przeznaczone do osadzenia w kliencie.
const firebaseConfig = {
  apiKey: 'AIzaSyD_DjAnL_sw060h2Tb2yOejp6vwkMPlg90',
  authDomain: 'hypnotherapy-61309594-7580e.firebaseapp.com',
  projectId: 'hypnotherapy-61309594-7580e',
  storageBucket: 'hypnotherapy-61309594-7580e.firebasestorage.app',
  messagingSenderId: '869853988396',
  appId: '1:869853988396:web:9672197d0e27f58d1a3389',
  measurementId: 'G-ZFN9ZR4YQ6',
};

// Publiczny site key reCAPTCHA v3 dla App Check.
// Pobierz go z konsoli Firebase → App Check (po rejestracji aplikacji web).
// Można też ustawić przez zmienną środowiskową VITE_RECAPTCHA_SITE_KEY.
const RECAPTCHA_SITE_KEY =
  (import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined) ||
  '6LdU-jUtAAAAAKZO2wS4iQ5Z8hXnA_od3oBkfpXq';

let dbPromise: Promise<Firestore> | null = null;

// Leniwa inicjalizacja – SDK Firebase ładuje się dopiero przy pierwszym użyciu
// (np. wysłaniu formularza), więc nie obciąża początkowego bundla strony.
export function getDb(): Promise<Firestore> {
  if (!dbPromise) {
    dbPromise = (async () => {
      const { initializeApp, getApps, getApp } = await import('firebase/app');
      const { getFirestore } = await import('firebase/firestore');
      const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

      // App Check (reCAPTCHA v3) – chroni Firestore przed nadużyciami/spamem.
      // Inicjalizujemy zanim użyjemy Firestore, aby token był dołączany do żądań.
      if (RECAPTCHA_SITE_KEY) {
        try {
          const { initializeAppCheck, ReCaptchaV3Provider } = await import('firebase/app-check');
          // Debug token na localhost (zarejestruj go w konsoli App Check).
          if (import.meta.env.DEV) {
            (self as unknown as { FIREBASE_APPCHECK_DEBUG_TOKEN?: boolean }).FIREBASE_APPCHECK_DEBUG_TOKEN = true;
          }
          initializeAppCheck(app, {
            provider: new ReCaptchaV3Provider(RECAPTCHA_SITE_KEY),
            isTokenAutoRefreshEnabled: true,
          });
        } catch (err) {
          console.error('App Check initialization failed:', err);
        }
      }

      return getFirestore(app);
    })();
  }
  return dbPromise;
}
