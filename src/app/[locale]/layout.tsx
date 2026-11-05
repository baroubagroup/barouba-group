import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import BaroubaAssistant from '@/components/v2/BaroubaAssistant';
import { ThemeProvider } from '@/components/ThemeProvider';
import SmoothScroll from '@/components/animations/SmoothScroll';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.baroubagroup.com'),
  title: {
    default: 'BAROUBA GROUP — Agence Digitale & Pôle IA d\'Élite au Burkina Faso',
    template: '%s | BAROUBA GROUP',
  },
  description:
    "Dominez votre marché au Burkina Faso et en Afrique de l'Ouest avec BAROUBA GROUP. Écosystèmes web haute conversion Next.js, publicité Meta & TikTok Ads avec fort ROAS, agents IA sur WhatsApp et formations professionnelles certifiantes.",
  keywords: [
    'création site web burkina faso',
    'agence web ouagadougou',
    'agence digitale burkina faso',
    'community manager burkina faso',
    'gestion de pages facebook ouagadougou',
    'communication digitale burkina faso',
    'publicité facebook burkina faso',
    'media buying afrique de louest',
    'formation marketing digital burkina',
    'formation community management ouagadougou',
    'formation intelligence artificielle burkina',
    'formation e-commerce burkina faso',
    'tunnel de vente whatsapp burkina',
    'e-commerce orange money moov money burkina',
    'développement web sur mesure ouagadougou',
    'BAROUBA INTERNATIONAL GROUP',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.baroubagroup.com',
    siteName: 'BAROUBA GROUP',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://www.baroubagroup.com/fr',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: 'google40bfcfaf213895bf',
  },
  other: {
    'geo.region': 'BF',
    'geo.placename': 'Bobo-Dioulasso, Ouagadougou',
    'geo.position': '11.1771;-4.2979',
    'ICBM': '11.1771, -4.2979',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    name: 'BAROUBA GROUP',
    legalName: 'BAROUBA INTERNATIONAL GROUP SARL',
    alternateName: ['BAROUBA INTERNATIONAL GROUP', 'BAROUBA GROUP SARL'],
    url: 'https://www.baroubagroup.com',
    logo: 'https://www.baroubagroup.com/logo-or.svg',
    image: 'https://www.baroubagroup.com/og-image.jpg',
    description:
      "Agence digitale de référence, communication digitale, ingénierie web Next.js 16, Media Buying Meta & TikTok, agents IA sur WhatsApp et Formations professionnelles certifiantes au Burkina Faso et en Afrique de l'Ouest.",
    telephone: '+226-74-82-66-66',
    email: 'contact@baroubagroup.com',
    founder: {
      '@type': 'Person',
      name: 'Monsieur SAKO BAROU BEN OUMAR',
      jobTitle: 'Fondateur & Directeur Général',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+226-74-82-66-66',
        contactType: 'customer support',
        email: 'contact@baroubagroup.com',
        availableLanguage: ['French', 'English'],
        areaServed: ['BF', 'CI', 'SN', 'ML', 'NE'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+226-74-82-66-66',
        contactType: 'sales',
        email: 'contact@baroubagroup.com',
        availableLanguage: ['French'],
        areaServed: ['BF', 'CI', 'SN', 'ML', 'NE'],
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bobo-Dioulasso',
      addressRegion: 'Hauts-Bassins',
      addressCountry: 'BF',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 11.1771,
      longitude: -4.2979,
    },
    areaServed: [
      { '@type': 'Country', name: 'Burkina Faso' },
      { '@type': 'Country', name: "Côte d'Ivoire" },
      { '@type': 'Country', name: 'Sénégal' },
      { '@type': 'Country', name: 'Mali' },
      { '@type': 'Country', name: 'Niger' },
    ],
    knowsAbout: [
      'Création de sites web Next.js',
      'Intelligence Artificielle générative',
      'Agents IA WhatsApp Business',
      'Automatisation de processus n8n',
      'Media Buying Meta et TikTok Ads',
      'Community Management',
      'Formation Métiers du Numérique',
      'Cybersécurité et Conformité CIL',
    ],
    priceRange: 'FCFA',
    sameAs: [
      'https://www.facebook.com/baroubagroup',
      'https://wa.me/22674826666',
    ],
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function() {
              try {
                var current = localStorage.getItem('theme') || 'dark';
                document.documentElement.setAttribute('data-theme', current);
              } catch (e) {}
            })();
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          <SmoothScroll>
            <NextIntlClientProvider messages={messages}>
              <Navbar />
              <main style={{ paddingTop: 'var(--nav-height)' }}>
                {children}
              </main>
              <Footer />
              <BaroubaAssistant />
            </NextIntlClientProvider>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
