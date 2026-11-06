import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['fr'],
  defaultLocale: 'fr',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/services': '/services',
    '/services/marketing-digital': {
      fr: '/services/marketing-digital',
      en: '/services/digital-marketing',
    },
    '/services/publicite-digitale': {
      fr: '/services/publicite-digitale',
      en: '/services/digital-advertising',
    },
    '/services/tunnels-de-vente': {
      fr: '/services/tunnels-de-vente',
      en: '/services/sales-funnels',
    },
    '/services/developpement-sur-mesure': {
      fr: '/services/developpement-sur-mesure',
      en: '/services/custom-development',
    },
    '/services/automatisation-agents-ia': {
      fr: '/services/automatisation-agents-ia',
      en: '/services/automation-ai-agents',
    },
    '/services/formation-accompagnement': {
      fr: '/services/formation-accompagnement',
      en: '/services/training-coaching',
    },
    '/services/e-commerce': {
      fr: '/services/e-commerce',
      en: '/services/e-commerce',
    },
    '/solutions': {
      fr: '/solutions',
      en: '/solutions',
    },
    '/formations': {
      fr: '/formations',
      en: '/training',
    },
    '/formations/[category]/[slug]': {
      fr: '/formations/[category]/[slug]',
      en: '/training/[category]/[slug]',
    },
    '/formations/[...slug]': {
      fr: '/formations/[...slug]',
      en: '/training/[...slug]',
    },
    '/formations/old-slug': {
      fr: '/formations/[slug]',
      en: '/training/[slug]',
    },
    '/blog': '/blog',
    '/blog/[slug]': '/blog/[slug]',
    '/boutique': {
      fr: '/boutique',
      en: '/shop',
    },
    '/boutique/[slug]': {
      fr: '/boutique/[slug]',
      en: '/shop/[slug]',
    },
    '/portfolio': '/portfolio',
    '/a-propos': {
      fr: '/a-propos',
      en: '/about',
    },
    '/cgv': {
      fr: '/cgv',
      en: '/terms',
    },
    '/politique-de-confidentialite': '/politique-de-confidentialite',
    '/devis': {
      fr: '/devis',
      en: '/quote',
    },
    '/contact': '/contact',
    '/territoires': '/territoires',
    '/territoires/[country]': '/territoires/[country]',
    '/territoires/[country]/[city]': '/territoires/[country]/[city]',
    '/territoires/[country]/[city]/[service]': '/territoires/[country]/[city]/[service]',
  },
});

export type Locale = (typeof routing.locales)[number];




