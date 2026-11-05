import type { Metadata } from 'next';
import HeroShowcase from '@/components/v2/HeroShowcase';
import InteractiveCards from '@/components/v2/InteractiveCards';
import AgencyComparator from '@/components/v2/AgencyComparator';
import WorkflowProcess from '@/components/v2/WorkflowProcess';
import StoryPortfolio from '@/components/v2/StoryPortfolio';
import GuaranteesTrust from '@/components/v2/GuaranteesTrust';
import AuthorityFAQ from '@/components/v2/AuthorityFAQ';
import ExecutiveContact from '@/components/v2/ExecutiveContact';
import AfricanPatternRibbon from '@/components/v2/AfricanPatternRibbon';

interface HomeProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: HomeProps): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'fr'
      ? 'BAROUBA GROUP : Agence Digitale, Web Next.js & IA au Burkina'
      : 'BAROUBA GROUP: Digital Agency, Web Next.js & AI in Burkina',
    description: locale === 'fr'
      ? 'Agence digitale à Bobo-Dioulasso et Ouagadougou : création web Next.js, communication 360°, agents IA, tunnels WhatsApp et formations certifiantes.'
      : 'Digital agency in Bobo-Dioulasso & Ouagadougou: Next.js web creation, 360° communication, AI agents, WhatsApp funnels and certified training.',
    alternates: {
      canonical: 'https://www.baroubagroup.com/fr',
      languages: {
        'fr': 'https://www.baroubagroup.com/fr',
        'x-default': 'https://www.baroubagroup.com/fr',
      },
    },
  };
}

const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://www.baroubagroup.com/#organization',
      name: 'BAROUBA GROUP',
      legalName: 'BAROUBA INTERNATIONAL GROUP SARL',
      url: 'https://www.baroubagroup.com',
      logo: 'https://www.baroubagroup.com/logo-or.svg',
      image: 'https://www.baroubagroup.com/og-image.jpg',
      description: "Cabinet d'ingénierie logicielle Next.js, communication 360°, intégration d'agents IA et formation professionnelle certifiante.",
      telephone: '+226-74-82-66-66',
      email: 'contact@baroubagroup.com',
      founder: {
        '@type': 'Person',
        name: 'Monsieur SAKO BAROU BEN OUMAR',
        jobTitle: 'Fondateur & Directeur Général',
      },
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
      ],
      priceRange: '$$',
      knowsAbout: [
        'Next.js Development',
        'Artificial Intelligence Agents',
        'Community Management',
        'Performance Advertising Meta TikTok',
        'Local SEO Burkina Faso',
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

export default async function HomePage({ params }: HomeProps) {
  return (
    <main>
      {/* Schema.org Inlined Graph for Instant Crawler Discovery */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      {/* 01 // Hero Showcase with Real Software Screenshots & Bogolan Watermark */}
      <HeroShowcase />

      {/* Frieze: African Geometric Craftsmanship */}
      <AfricanPatternRibbon label="HAUTE TECHNOLOGIE AFRICAINE & INTERNATIONALE" />

      {/* 02 // Core Capabilities with Real Software Previews */}
      <InteractiveCards />

      {/* 03 // Why Choose Us: Direct Matrix Comparison (Barouba vs Agency vs Freelance) */}
      <AgencyComparator />

      {/* Frieze: Method & Precision */}
      <AfricanPatternRibbon label="MÉTHODOLOGIE DE DÉPLOIEMENT & RIGUEUR LOGICIELLE" />

      {/* 04 // How We Work: 4-Step Agile Delivery & Sprint Methodology */}
      <WorkflowProcess />

      {/* 05 // Verified Case Studies & Real Client Software Stories */}
      <StoryPortfolio />

      {/* 06 // 5 Legal Guarantees & Risk-Reversal Trust System */}
      <GuaranteesTrust />

      {/* Frieze: Transparency & Guarantees */}
      <AfricanPatternRibbon label="TRANSPARENCE TOTALE & ENGAGEMENTS CONTRACTUELS" />

      {/* 07 // Comprehensive Objection-Killing Authority FAQ */}
      <AuthorityFAQ />

      {/* 08 // Executive VIP WhatsApp & Detailed Quote Dispatch */}
      <ExecutiveContact />
    </main>
  );
}
