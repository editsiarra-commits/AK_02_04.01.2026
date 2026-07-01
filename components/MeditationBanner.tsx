import React, { Suspense, lazy, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Check, Download, Headphones, Loader2, X } from 'lucide-react';
import { subscribeToNewsletter } from '../lib/newsletter';
import { getSiteUrl } from '../seo/siteConfig';

const QRCode = lazy(() => import('qrcode.react').then((m) => ({ default: m.QRCodeSVG })));

const MP3_PATH = '/assets/medytacja_01.mp3';
const MP3_FILENAME = 'medytacja_01.mp3';

const WAVEFORM_BARS = [
  0.3, 0.7, 1.0, 0.4, 0.8, 0.5, 0.95, 0.6, 0.35, 0.85,
  1.0, 0.45, 0.75, 0.5, 0.9, 0.6, 0.3, 0.8, 0.95, 0.5,
  0.4, 0.85, 1.0, 0.55, 0.7, 0.4, 0.9, 0.65, 0.35, 0.8,
  0.95, 0.5, 0.75, 0.45, 1.0, 0.6, 0.3, 0.85, 0.7, 0.4,
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

const Waveform: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-end justify-between gap-[1px] h-6 ${className}`} aria-hidden="true">
    {WAVEFORM_BARS.map((peak, i) => (
      <span
        key={i}
        className="waveform-bar w-[2.5px] rounded-full bg-coffee-400"
        style={{
          height: `${peak * 160}%`,
          animationDelay: `${(i % 13) * 0.08}s`,
        }}
      />
    ))}
  </div>
);

const MeditationBanner: React.FC = () => {
  const [searchParams] = useSearchParams();
  const qrMode = searchParams.get('zapis') === 'qr';

  const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [therapeuticConsent, setTherapeuticConsent] = useState(false);

  // Po zeskanowaniu kodu QR (?zapis=qr) automatycznie otwórz formularz.
  useEffect(() => {
    if (qrMode) setExpanded(true);
  }, [qrMode]);

  const triggerDownload = () => {
    const link = document.createElement('a');
    link.href = MP3_PATH;
    link.download = MP3_FILENAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent || (qrMode && !therapeuticConsent)) return;
    setStatus('submitting');
    try {
      await subscribeToNewsletter({
        email,
        phone,
        consent,
        therapeuticConsent: qrMode ? therapeuticConsent : undefined,
        source: qrMode ? 'qr' : 'meditation_banner',
      });
      setStatus('success');
      triggerDownload();
    } catch (err) {
      console.error('Newsletter signup failed:', err);
      setStatus('error');
    }
  };

  // Zawsze używamy adresu produkcyjnego dla kodu QR, nawet w środowisku deweloperskim,
  // aby po zeskanowaniu z ekranu komputera telefon otwierał właściwą stronę.
  const qrUrl = 'https://www.agnieszkakochanowska.pl/?zapis=qr';

  return (
    <div className="relative z-20 w-fit max-w-[calc(100vw-2rem)] mx-auto mb-8 -translate-y-[80px] animate-fade-in-up [animation-delay:0.1s] [animation-fill-mode:both]">
      <div className="flex flex-col xl:flex-row rounded-4xl border border-warm-300/15 bg-warm-50/30 backdrop-blur-md shadow-xl shadow-warm-50/20 overflow-hidden transition-all duration-500">
        
        {/* Lewa część: Formularz (zawsze widoczna) */}
        <div className="w-full sm:w-[384px] shrink-0">
          {/* Collapsed bar */}
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="w-full flex flex-col justify-center gap-4 px-5 py-4 xl:min-h-[156px] text-left group focus:outline-none focus:ring-1 focus:ring-coffee-400/60"
            aria-expanded={expanded}
          >
            {/* Wiersz 1: ikona słuchawek + dynamiczny waveform */}
            <span className="flex items-center gap-4">
              <span className="shrink-0 text-coffee-400">
                <Headphones size={22} strokeWidth={1.75} />
              </span>
              <Waveform className="flex-1" />
            </span>
            {/* Wiersz 2: tekst + przycisk pobierania */}
            <span className="flex items-center gap-4">
              <span className="flex-1 min-w-0">
                <span className="block text-[#f3f3f3] text-sm font-medium tracking-wide truncate">
                  Darmowa medytacja audio
                </span>
                <span className="block text-[#f3f3f3] text-xs font-light truncate">
                  Pobierz nagranie na telefon lub komputer
                </span>
              </span>
              <span className="shrink-0 inline-flex items-center gap-2 text-[#f3f3f3] text-xs uppercase tracking-widest font-semibold">
                {expanded ? <X size={16} /> : <Download size={16} />}
                <span>{expanded ? 'Zamknij' : 'Pobierz'}</span>
              </span>
            </span>
          </button>

          {/* Expandable form */}
          <div
            className={`grid transition-all duration-500 ease-out ${
              expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-5 pb-5 pt-1 border-t border-warm-300/10">
                {status === 'success' ? (
                  <div className="flex flex-col items-center text-center gap-3 py-4">
                    <span className="w-12 h-12 rounded-full bg-coffee-400/15 text-coffee-400 flex items-center justify-center">
                      <Check size={26} />
                    </span>
                    <p className="text-[#f3f3f3] text-sm font-medium">Dziękuję! Pobieranie powinno ruszyć automatycznie.</p>
                    <button
                      type="button"
                      onClick={triggerDownload}
                      className="inline-flex items-center gap-2 text-coffee-400 hover:text-coffee-300 text-xs uppercase tracking-widest font-semibold transition-colors"
                    >
                      <Download size={14} /> Pobierz ponownie
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3 pt-3">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Twój adres email"
                      className="w-full px-4 py-2.5 bg-black/20 border border-white/10 rounded-xl text-white text-sm placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-white/30 transition-all"
                    />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Numer telefonu (opcjonalnie)"
                      className="w-full px-4 py-2.5 bg-black/20 border border-white/10 rounded-xl text-white text-sm placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-white/30 transition-all"
                    />
                    <label className="flex items-start gap-3 text-white/80 text-xs font-light leading-relaxed cursor-pointer select-none">
                      <input
                        type="checkbox"
                        required
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-0.5 w-4 h-4 shrink-0 accent-coffee-500"
                      />
                      <span>
                        Wyrażam zgodę na przetwarzanie moich danych osobowych w celu otrzymywania
                        newslettera oraz materiałów od Agnieszki Kochanowskiej.
                      </span>
                    </label>
                    {qrMode && (
                      <label className="flex items-start gap-3 text-white/80 text-xs font-light leading-relaxed cursor-pointer select-none">
                        <input
                          type="checkbox"
                          required
                          checked={therapeuticConsent}
                          onChange={(e) => setTherapeuticConsent(e.target.checked)}
                          className="mt-0.5 w-4 h-4 shrink-0 accent-coffee-500"
                        />
                        <span>
                          Wyrażam zgodę na wykorzystanie moich danych do celów terapeutycznych.
                        </span>
                      </label>
                    )}
                    {status === 'error' && (
                      <p className="text-coffee-300 text-xs">Coś poszło nie tak. Spróbuj ponownie.</p>
                    )}
                    <button
                      type="submit"
                      disabled={status === 'submitting' || !consent || (qrMode && !therapeuticConsent)}
                      className="w-full py-3 bg-coffee-700 text-white text-xs uppercase tracking-widest font-bold rounded-full hover:bg-coffee-600 transition-colors shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 size={16} className="animate-spin" /> Wysyłanie...
                        </>
                      ) : (
                        <>
                          <Download size={16} /> Wyślij i pobierz
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Prawa część: Kod QR (tylko szerokie ekrany, znika po rozwinięciu) */}
        <div
          className={`hidden xl:flex overflow-hidden transition-all duration-500 ease-in-out ${
            expanded ? 'w-0 opacity-0 border-l-0' : 'w-[340px] opacity-100 border-l border-warm-300/15'
          }`}
        >
          <div className="flex items-center justify-center gap-5 px-5 py-4 min-h-[156px] w-[340px] shrink-0">
            <div className="shrink-0 p-2.5 bg-white rounded-2xl shadow-lg shadow-warm-50/10">
              <Suspense fallback={<div className="w-[104px] h-[104px] rounded-lg bg-warm-800/40 animate-pulse" />}>
                <QRCode value={qrUrl} size={104} level="M" fgColor="#13102b" bgColor="#ffffff" />
              </Suspense>
            </div>
            <p className="text-[#f3f3f3] text-base font-medium leading-relaxed whitespace-nowrap">
              Skanuj jeśli<br />
              chcesz kontynuować<br />
              w telefonie
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MeditationBanner;
