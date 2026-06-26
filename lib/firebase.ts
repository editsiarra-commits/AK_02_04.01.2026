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

let dbPromise: Promise<Firestore> | null = null;

// Leniwa inicjalizacja – SDK Firebase ładuje się dopiero przy pierwszym użyciu
// (np. wysłaniu formularza), więc nie obciąża początkowego bundla strony.
export function getDb(): Promise<Firestore> {
  if (!dbPromise) {
    dbPromise = (async () => {
      const { initializeApp, getApps, getApp } = await import('firebase/app');
      const { getFirestore } = await import('firebase/firestore');
      const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
      return getFirestore(app);
    })();
  }
  return dbPromise;
}
