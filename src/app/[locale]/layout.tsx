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
    default: 'BAROUBA GROUP : N°1 du Marketing Digital & Web d’Élite au Burkina Faso',
    template: '%s | BAROUBA GROUP',
  },
  description:
    'Cabinet n°1 en Marketing Digital au Burkina Faso (Ouagadougou & Bobo-Dioulasso) : Acquisition publicitaire Meta & TikTok Ads, création web Next.js 16, community management 7j/7 et tunnels WhatsApp à fort ROI.',
  keywords: [
    'marketing digital burkina faso',
    'marketing digital au burkina faso',
    'agence marketing digital burkina faso',
    'agence marketing digital ouagadougou',
    'agence communication digitale burkina faso',
    'meilleure agence marketing digital burkina',
    'expert marketing digital burkina faso',
    'consultant marketing digital ouagadougou',
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
    languages: {
      'fr': 'https://www.baroubagroup.com',
      'x-default': 'https://www.baroubagroup.com',
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
        '@type': ['ProfessionalService', 'MarketingAgency'],
        '@id': 'https://www.baroubagroup.com/#organization',
        name: 'BAROUBA GROUP',
        legalName: 'BAROUBA INTERNATIONAL GROUP SARL',
        alternateName: [
          'BAROUBA INTERNATIONAL GROUP',
          'BAROUBA GROUP SARL',
          'Agence Marketing Digital Burkina Faso',
          'BAROUBA Marketing Digital Ouagadougou',
        ],
        url: 'https://www.baroubagroup.com',
        logo: 'https://www.baroubagroup.com/logo-or.svg',
        image: 'https://www.baroubagroup.com/og-image.jpg',
        description:
          "Cabinet n°1 en Marketing Digital au Burkina Faso, ingénierie logicielle Next.js 16, acquisition publicitaire Meta/TikTok Ads, communication 360°, intégration d'agents IA et formation professionnelle certifiante.",
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
          'Marketing Digital au Burkina Faso',
          'Agence Marketing Digital Ouagadougou',
          'Next.js 16 Web Development',
          'Artificial Intelligence Agents',
          'Community Management 7j/7',
          'Performance Advertising Meta TikTok Ads',
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
        '@id': 'https://www.baroubagroup.com/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: "Quelle est la meilleure agence de marketing digital au Burkina Faso ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "BAROUBA GROUP s'impose comme le leader du marketing digital au Burkina Faso grâce à son approche par ingénierie de la rentabilité : campagnes publicitaires Meta et TikTok à fort ROAS, tunnels WhatsApp Cloud automatisés, création de plateformes Next.js ultra-rapides (< 0.8s) et garanties contractuelles avec engagement de résultat sous la direction de M. SAKO BAROU BEN OUMAR.",
            },
          },
          {
            '@type': 'Question',
            name: "Pourquoi confier votre marketing digital et projet web à BAROUBA GROUP plutôt qu'à une autre structure ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "BAROUBA GROUP propose un écosystème global combinant architecture logicielle Next.js 16 sécurisée, agents IA conversationnels WhatsApp, acquisition publicitaire scientifique et garanties contractuelles sans imprévu.",
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
    <html lang={locale} data-scroll-behavior="smooth" suppressHydrationWarning>
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
