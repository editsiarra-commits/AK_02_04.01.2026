import { offers } from '../data/offers';
import { SITE_NAME } from './siteConfig';

export interface PageMeta {
  title: string;
  description: string;
  keywords: string;
}

const DEFAULT_META: PageMeta = {
  title: `${SITE_NAME} | Hipnoterapia, integracja psychodeliczna — Białystok, Warszawa, online`,
  description:
    'Hipnoterapia, integracja doświadczeń psychodelicznych, sesje oddechowe i praca w nurcie Cannabis Assisted Therapy (CAT). Gabinet w Białymstoku i Warszawie, sesje online. Umów konsultację.',
  keywords:
    'hipnoterapia, hipnoterapia Białystok, hipnoterapia Warszawa, hipnoterapia online, integracja psychodeliczna, sesje oddechowe, breathwork, Cannabis Assisted Therapy, CAT, terapeuta, gabinet terapeutyczny, psychologia',
};

const ROUTE_META: Record<string, PageMeta> = {
  '/': {
    title: `${SITE_NAME} | Hipnoterapia — Białystok, Warszawa, online`,
    description:
      'Hipnoterapia, integracja doświadczeń psychodelicznych, sesje oddechowe oraz praca integracyjna w nurcie Cannabis Assisted Therapy. Gabinet w Białymstoku i Warszawie, możliwość pracy online.',
    keywords: DEFAULT_META.keywords,
  },
  '/hipnoterapia': {
    title: `Hipnoterapia | ${SITE_NAME} — Białystok, Warszawa, online`,
    description:
      'Czym jest hipnoterapia, dla kogo jest sesja i jak wygląda proces. Praca z emocjami, lękiem i schematami — gabinet w Białymstoku i Warszawie, sesje online.',
    keywords:
      'hipnoterapia, hipnoterapia Białystok, hipnoterapia Warszawa, hipnoterapia online, sesje hipnozy, terapeuta, głęboka praca z podświadomością',
  },
  '/integracja-psychodeliczna': {
    title: `Integracja doświadczeń psychodelicznych | ${SITE_NAME}`,
    description:
      'Przygotowanie i integracja po doświadczeniach psychodelicznych — praca rozwojowa zgodna z prawem. Białystok, Warszawa, online.',
    keywords:
      'integracja psychodeliczna, integracja po psychodelikach, przygotowanie do doświadczenia psychodelicznego, tripsitting, wsparcie psychologiczne',
  },
  '/sesje-oddechowe': {
    title: `Sesje oddechowe | ${SITE_NAME} — Białystok, Warszawa`,
    description:
      'Indywidualne sesje oddechowe inspirowane oddychaniem holotropowym, z integracją. Gabinet w Białymstoku i Warszawie.',
    keywords:
      'sesje oddechowe, breathwork, oddychanie holotropowe, oddech w terapii, sesje oddechowe Białystok, sesje oddechowe Warszawa',
  },
  '/cat': {
    title: `Cannabis Assisted Therapy (CAT) — integracja | ${SITE_NAME}`,
    description:
      'Praca integracyjna inspirowana podejściem Cannabis Assisted Therapy — bez podawania substancji, w zgodzie z prawem w Polsce. Białystok, Warszawa, online.',
    keywords:
      'Cannabis Assisted Therapy, CAT, terapia wspomagana kannabisem, integracja, medyczna marihuana kontekst terapeutyczny, Polska',
  },
  '/pricing': {
    title: `Cennik | ${SITE_NAME}`,
    description:
      'Cennik sesji hipnoterapii i pakietów. Gabinet w Białymstoku i Warszawie, możliwość pracy online — szczegóły na stronie.',
    keywords: 'cennik hipnoterapia, cena sesji hipnozy, terapia cennik Białystok Warszawa',
  },
};

export function getPageMeta(pathname: string, offerId: string | undefined): PageMeta {
  if (offerId && offers[offerId]) {
    const o = offers[offerId];
    return {
      title: `${o.title} | Oferta — ${SITE_NAME}`,
      description: `${o.description.slice(0, 155)}${o.description.length > 155 ? '…' : ''} Hipnoterapia Białystok, Warszawa, online.`,
      keywords: `hipnoterapia, ${o.title}, oferta, Białystok, Warszawa, online, ${DEFAULT_META.keywords}`,
    };
  }
  return ROUTE_META[pathname] ?? DEFAULT_META;
}
