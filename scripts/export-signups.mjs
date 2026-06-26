#!/usr/bin/env node
/**
 * Eksport listy mailingowej (kolekcja `newsletter_signups`) do pliku CSV.
 *
 * Uruchomienie:
 *   npm run export:signups
 *
 * Uwierzytelnianie (jedna z opcji):
 *   1. Plik klucza serwisowego `service-account.json` w katalogu projektu
 *      (Konsola Firebase → Ustawienia projektu → Konta usługi → Wygeneruj
 *      nowy klucz prywatny). Plik jest w .gitignore – nie commitować!
 *   2. Application Default Credentials (np. `gcloud auth application-default login`).
 *
 * Wynik: plik `signups-export-RRRRMMDD-HHMM.csv` w katalogu projektu.
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { initializeApp, cert, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

const PROJECT_ID = 'hypnotherapy-61309594-7580e';
const COLLECTION = 'newsletter_signups';
const COLUMNS = ['email', 'phone', 'consent', 'source', 'createdAt'];

function initAdmin() {
  const keyPath = join(projectRoot, 'service-account.json');
  if (existsSync(keyPath)) {
    const serviceAccount = JSON.parse(readFileSync(keyPath, 'utf8'));
    return initializeApp({ credential: cert(serviceAccount), projectId: PROJECT_ID });
  }
  if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    return initializeApp({ credential: applicationDefault(), projectId: PROJECT_ID });
  }
  console.error(
    [
      'Brak poświadczeń. Aby wyeksportować listę:',
      '',
      '  1. Konsola Firebase → Ustawienia projektu (⚙) → Konta usługi',
      '  2. „Wygeneruj nowy klucz prywatny” → pobierz plik JSON',
      `  3. Zapisz go jako: ${join(projectRoot, 'service-account.json')}`,
      '     (plik jest w .gitignore – nie trafi do repozytorium)',
      '  4. Uruchom ponownie: npm run export:signups',
      '',
      'Klucz serwisowy to SEKRET – nie udostępniaj go nikomu.',
    ].join('\n'),
  );
  process.exit(1);
}

function toCsvField(value) {
  const str = value == null ? '' : String(value);
  // Cytowanie pól zawierających przecinek, cudzysłów lub nową linię.
  if (/[",\n\r]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

function formatValue(field, raw) {
  if (raw == null) return '';
  if (field === 'createdAt' && typeof raw.toDate === 'function') {
    return raw.toDate().toISOString();
  }
  if (typeof raw === 'boolean') return raw ? 'tak' : 'nie';
  return raw;
}

async function main() {
  initAdmin();
  const db = getFirestore();

  const snapshot = await db.collection(COLLECTION).orderBy('createdAt', 'desc').get();

  const header = COLUMNS.join(',');
  const rows = snapshot.docs.map((doc) => {
    const data = doc.data();
    return COLUMNS.map((col) => toCsvField(formatValue(col, data[col]))).join(',');
  });

  // BOM dla poprawnego otwierania polskich znaków w Excelu.
  const csv = '\uFEFF' + [header, ...rows].join('\r\n') + '\r\n';

  const now = new Date();
  const stamp =
    `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}` +
    `-${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}`;
  const outPath = join(projectRoot, `signups-export-${stamp}.csv`);

  writeFileSync(outPath, csv, 'utf8');
  console.log(`Wyeksportowano ${snapshot.size} zapisów do:\n${outPath}`);
}

main().catch((err) => {
  console.error('Eksport nie powiódł się:', err.message || err);
  process.exitCode = 1;
});
