#!/usr/bin/env node
/**
 * Generuje kod QR (do druku) prowadzący do zapisu z medytacją.
 *
 * Uruchomienie:
 *   npm run qr:generate
 *   SITE_URL=https://www.agnieszkakochanowska.pl npm run qr:generate   // własna domena
 *
 * Wynik: public/assets/qr-medytacja.svg (wektor, idealny do druku)
 *        public/assets/qr-medytacja.png (1024 px, hi-res)
 */
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdirSync } from 'node:fs';
import QRCode from 'qrcode';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'public', 'assets');

const BASE_URL = (process.env.SITE_URL || 'https://www.agnieszkakochanowska.pl').replace(/\/$/, '');
const target = `${BASE_URL}/?zapis=qr`;

const options = {
  errorCorrectionLevel: 'M',
  margin: 2,
  color: { dark: '#13102bff', light: '#ffffffff' },
};

async function main() {
  mkdirSync(outDir, { recursive: true });
  const svgPath = join(outDir, 'qr-medytacja.svg');
  const pngPath = join(outDir, 'qr-medytacja.png');

  await QRCode.toFile(svgPath, target, { ...options, type: 'svg' });
  await QRCode.toFile(pngPath, target, { ...options, type: 'png', width: 1024 });

  console.log(`Wygenerowano kod QR dla: ${target}`);
  console.log(`  ${svgPath}`);
  console.log(`  ${pngPath}`);
}

main().catch((err) => {
  console.error('Generowanie QR nie powiodło się:', err.message || err);
  process.exitCode = 1;
});
