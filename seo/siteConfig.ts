/// <reference types="vite/client" />

/** Bazowy URL produkcyjny (bez końcowego /). Ustaw w .env: VITE_SITE_URL=https://www.agnieszkakochanowska.pl */
export const SITE_NAME = 'Agnieszka Kochanowska';

export function getSiteUrl(): string {
  const fromEnv = import.meta.env.VITE_SITE_URL as string | undefined;
  if (fromEnv && fromEnv.trim()) {
    return fromEnv.replace(/\/$/, '');
  }
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  return '';
}

/** Pełny adres kanoniczny strony */
export function getCanonicalUrl(pathname: string): string {
  const base = getSiteUrl();
  if (!base) return '';
  const path = pathname === '/' ? '/' : pathname;
  return `${base}${path}`;
}
