import React, { useState } from 'react';
import { Check, Download, Headphones, Loader2, X } from 'lucide-react';
import { subscribeToNewsletter } from '../lib/newsletter';

const MP3_PATH = '/assets/medytacja_01.mp3';
const MP3_FILENAME = 'medytacja_01.mp3';

const WAVEFORM_BARS = [
  0.4, 0.7, 1.0, 0.6, 0.85, 0.5, 0.95, 0.65, 0.45, 0.8,
  1.0, 0.55, 0.75, 0.5, 0.9, 0.6, 0.35, 0.7, 0.85, 0.5,
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

const Waveform: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-end gap-[3px] h-6 ${className}`} aria-hidden="true">
    {WAVEFORM_BARS.map((peak, i) => (
      <span
        key={i}
        className="waveform-bar w-[3px] rounded-full bg-coffee-400"
        style={{
          height: `${peak * 100}%`,
          animationDelay: `${(i % 10) * 0.11}s`,
        }}
      />
    ))}
  </div>
);

const MeditationBanner: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);

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
    if (!consent) return;
    setStatus('submitting');
    try {
      await subscribeToNewsletter({ email, phone, consent });
      setStatus('success');
      triggerDownload();
    } catch (err) {
      console.error('Newsletter signup failed:', err);
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto mb-8 animate-fade-in-up [animation-delay:0.1s] [animation-fill-mode:both]">
      <div className="rounded-2xl border border-warm-300/15 bg-warm-50/30 backdrop-blur-md shadow-xl shadow-warm-50/20 overflow-hidden">
        {/* Collapsed bar */}
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="w-full flex items-center gap-4 px-5 py-3.5 text-left group focus:outline-none focus:ring-1 focus:ring-coffee-400/60"
          aria-expanded={expanded}
        >
          <span className="shrink-0 text-coffee-400">
            <Headphones size={22} strokeWidth={1.75} />
          </span>
          <Waveform className="shrink-0 hidden sm:flex" />
          <span className="flex-1 min-w-0">
            <span className="block text-[#f3f3f3] text-sm font-medium tracking-wide truncate">
              Darmowa medytacja MP3
            </span>
            <span className="block text-warm-400 text-xs font-light truncate">
              Pobierz nagranie na telefon lub komputer
            </span>
          </span>
          <span className="shrink-0 inline-flex items-center gap-2 text-coffee-400 text-xs uppercase tracking-widest font-semibold">
            {expanded ? <X size={16} /> : <Download size={16} />}
            <span className="hidden sm:inline">{expanded ? 'Zamknij' : 'Pobierz'}</span>
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
                    className="w-full px-4 py-2.5 bg-warm-50/40 border border-warm-300/20 rounded-xl text-[#f3f3f3] text-sm placeholder-warm-400 focus:outline-none focus:ring-1 focus:ring-coffee-400 focus:border-coffee-400 transition-all"
                  />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Numer telefonu (opcjonalnie)"
                    className="w-full px-4 py-2.5 bg-warm-50/40 border border-warm-300/20 rounded-xl text-[#f3f3f3] text-sm placeholder-warm-400 focus:outline-none focus:ring-1 focus:ring-coffee-400 focus:border-coffee-400 transition-all"
                  />
                  <label className="flex items-start gap-3 text-warm-400 text-xs font-light leading-relaxed cursor-pointer select-none">
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
                  {status === 'error' && (
                    <p className="text-coffee-300 text-xs">Coś poszło nie tak. Spróbuj ponownie.</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'submitting' || !consent}
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
    </div>
  );
};

export default MeditationBanner;
