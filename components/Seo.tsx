import React, { useEffect } from 'react';
import { useLocation, useMatch } from 'react-router-dom';
import { getPageMeta } from '../seo/pageMeta';
import { getCanonicalUrl, getSiteUrl, SITE_NAME } from '../seo/siteConfig';

const META_DESC = 'meta[name="description"]';
const OG = (property: string) => `meta[property="${property}"]`;

function setOrCreateMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

function buildJsonLd(siteUrl: string): object {
  const base = siteUrl || (typeof window !== 'undefined' ? window.location.origin : '');
  const url = base ? `${base}/#/` : '';
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${SITE_NAME} — hipnoterapia i integracja`,
    description:
      'Hipnoterapia, integracja doświadczeń psychodelicznych, sesje oddechowe, praca w nurcie Cannabis Assisted Therapy. Gabinet w Białymstoku i Warszawie, sesje online.',
    url,
    telephone: '+48537537277',
    email: 'agnieszka_kochanowska@wp.pl',
    areaServed: [
      { '@type': 'City', name: 'Białystok' },
      { '@type': 'City', name: 'Warszawa' },
      { '@type': 'Country', name: 'Polska' },
    ],
    availableLanguage: 'pl',
    serviceType: [
      'Hipnoterapia',
      'Integracja doświadczeń psychodelicznych',
      'Sesje oddechowe',
      'Cannabis Assisted Therapy (integracja)',
    ],
  };
}

const Seo: React.FC = () => {
  const { pathname } = useLocation();
  const offerMatch = useMatch('/offer/:id');
  const offerId = offerMatch?.params?.id;

  useEffect(() => {
    const meta = getPageMeta(pathname, offerId);
    document.title = meta.title;

    setOrCreateMeta(META_DESC, 'name', 'description', meta.description);
    setOrCreateMeta('meta[name="keywords"]', 'name', 'keywords', meta.keywords);

    const siteUrl = getSiteUrl();
    const canonical =
      getCanonicalUrl(pathname) ||
      (typeof window !== 'undefined'
        ? `${window.location.origin}${window.location.pathname}${window.location.hash}`.replace(/\?[^#]*$/, '')
        : '');
    if (canonical) {
      setCanonical(canonical);
    }

    setOrCreateMeta(OG('og:title'), 'property', 'og:title', meta.title);
    setOrCreateMeta(OG('og:description'), 'property', 'og:description', meta.description);
    setOrCreateMeta(OG('og:type'), 'property', 'og:type', 'website');
    setOrCreateMeta(OG('og:locale'), 'property', 'og:locale', 'pl_PL');
    setOrCreateMeta(OG('og:url'), 'property', 'og:url', canonical || siteUrl || '');

    setOrCreateMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setOrCreateMeta('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title);
    setOrCreateMeta('meta[name="twitter:description"]', 'name', 'twitter:description', meta.description);

    const ld = buildJsonLd(siteUrl);
    let script = document.getElementById('seo-jsonld-localbusiness') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'seo-jsonld-localbusiness';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(ld);
  }, [pathname, offerId]);

  return null;
};

export default Seo;
