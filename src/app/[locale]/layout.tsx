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
    default: 'BAROUBA GROUP : Agence Digitale, Web Next.js & IA au Burkina',
    template: '%s | BAROUBA GROUP',
  },
  description:
    'Agence digitale à Bobo-Dioulasso et Ouagadougou : création web Next.js, communication 360°, agents IA, tunnels WhatsApp et formations certifiantes.',
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
    languages: {
      'fr': 'https://www.baroubagroup.com/fr',
      'x-default': 'https://www.baroubagroup.com/fr',
    },
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
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': 'https://www.baroubagroup.com/#organization',
        name: 'BAROUBA GROUP',
        legalName: 'BAROUBA INTERNATIONAL GROUP SARL',
        alternateName: ['BAROUBA INTERNATIONAL GROUP', 'BAROUBA GROUP SARL'],
        url: 'https://www.baroubagroup.com',
        logo: 'https://www.baroubagroup.com/logo-or.svg',
        image: 'https://www.baroubagroup.com/og-image.jpg',
        description:
          "Cabinet d'ingénierie logicielle Next.js, communication 360°, intégration d'agents IA et formation professionnelle certifiante.",
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
          { '@type': 'City', name: 'Bobo-Dioulasso' },
          { '@type': 'City', name: 'Ouagadougou' },
          { '@type': 'Country', name: 'Burkina Faso' },
          { '@type': 'Country', name: "Côte d'Ivoire" },
          { '@type': 'Country', name: 'Sénégal' },
        ],
        priceRange: '$$',
        knowsAbout: [
          'Next.js Development',
          'Artificial Intelligence Agents',
          'Community Management',
          'Performance Advertising Meta TikTok',
          'Local SEO Burkina Faso',
          'Tunnels de vente WhatsApp haute conversion',
        ],
        sameAs: [
          'https://www.facebook.com/baroubagroup',
          'https://wa.me/22674826666',
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.baroubagroup.com/fr#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: "Pourquoi confier votre projet digital à BAROUBA GROUP plutôt qu'à une autre structure ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "BAROUBA GROUP propose un écosystème global combinant architecture logicielle Next.js 16 sécurisée, agents IA conversationnels WhatsApp, acquisition publicitaire et garanties contractuelles sans imprévu.",
            },
          },
          {
            '@type': 'Question',
            name: "Où se situe le siège social de BAROUBA GROUP ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Le siège social de BAROUBA GROUP est situé à Bobo-Dioulasso (Burkina Faso), avec une capacité d'intervention opérationnelle à Ouagadougou, sur l'ensemble du territoire national et à l'international.",
            },
          },
          {
            '@type': 'Question',
            name: "Comment contacter la direction de BAROUBA GROUP ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Vous pouvez contacter la direction directement sur WhatsApp au +226 74 82 66 66 ou par email à contact@baroubagroup.com pour un cadrage personnalisé sans engagement.",
            },
          },
        ],
      },
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
