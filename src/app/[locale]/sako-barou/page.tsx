import type { Metadata } from 'next';
import Script from 'next/script';
import PersonalHero from '@/components/personal/PersonalHero';
import PersonaTriad from '@/components/personal/PersonaTriad';
import ExecutiveCapabilities from '@/components/personal/ExecutiveCapabilities';
import ExecutivePortfolio from '@/components/personal/ExecutivePortfolio';
import ExecutiveAdvisory from '@/components/personal/ExecutiveAdvisory';
import AfricanPatternRibbon from '@/components/v2/AfricanPatternRibbon';

interface SakoBarouProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: SakoBarouProps): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'fr'
      ? 'Monsieur SAKO BAROU BEN OUMAR • Stratège, Consultant & Formateur'
      : 'Mr. SAKO BAROU BEN OUMAR • Business Strategist, Executive Consultant & Mentor',
    description: locale === 'fr'
      ? 'Espace personnel et cabinet exécutif de Monsieur SAKO BAROU BEN OUMAR, Fondateur de BAROUBA GROUP à Bobo-Dioulasso & Ouagadougou. Stratégie de marché, développement Next.js & Mobile, SEO local, acquisition rentable et automatisation par agents IA.'
      : 'Executive practice of Mr. SAKO BAROU BEN OUMAR, Founder of BAROUBA GROUP (Bobo-Dioulasso & Ouagadougou). Market strategy, Next.js & Mobile engineering, local SEO, high-ROAS acquisition, and AI agents automation.',
    alternates: {
      canonical: 'https://www.baroubagroup.com/sako-barou',
    },
    openGraph: {
      title: 'Monsieur SAKO BAROU BEN OUMAR • Stratège, Consultant & Formateur',
      description: 'Cabinet exécutif personnel : Stratégie d’affaires, ingénierie logicielle Next.js & Mobile, SEO local et automatisation par agents IA en Afrique de l’Ouest.',
      url: 'https://www.baroubagroup.com/sako-barou',
      siteName: 'SAKO BAROU BEN OUMAR',
      images: [
        {
          url: '/images/sako-barou-ben-oumar.webp',
          width: 1200,
          height: 1400,
          alt: 'Portrait exécutif de Monsieur SAKO BAROU BEN OUMAR',
        },
      ],
      locale: 'fr_FR',
      type: 'profile',
    },
  };
}

export default async function SakoBarouPage({ params }: SakoBarouProps) {
  const { locale } = await params;

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'SAKO BAROU BEN OUMAR',
    alternateName: 'Barou Ben Oumar Sako',
    jobTitle: 'Stratège d’Affaires, Consultant Exécutif & Formateur',
    worksFor: {
      '@type': 'Organization',
      name: 'BAROUBA INTERNATIONAL GROUP',
      url: 'https://www.baroubagroup.com',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bobo-Dioulasso',
      addressRegion: 'Hauts-Bassins',
      addressCountry: 'BF',
    },
    knowsAbout: [
      'Stratégie de Croissance & Domination de Marché',
      'Architecture Logicielle Next.js 16 & Applications Mobiles',
      'SEO & Référencement Local Google Maps',
      'Marketing Digital & Media Buying Scientifique Meta TikTok Ads',
      'Workflows d’Automatisation & Agents IA Autonomes',
      'Gouvernance Juridique des Affaires OHADA',
    ],
    url: 'https://www.baroubagroup.com/sako-barou',
    image: 'https://www.baroubagroup.com/images/sako-barou-ben-oumar.webp',
  };

  return (
    <div style={{ backgroundColor: '#09080F', color: '#FFFFFF', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* 01 // Executive Hero with Three.js 3D Cosmic Stardust & Official Portrait */}
      <PersonalHero />

      {/* Sovereign Ribbon */}
      <AfricanPatternRibbon label="VISION STRATÉGIQUE & SOUVERAINETÉ NUMÉRIQUE AFRICAINE" />

      {/* 02 // 3 Core Hats : Stratège • Consultant • Formateur & Mentor */}
      <PersonaTriad />

      {/* 03 // 4 Real Operational Capabilities : Web/Mobile, SEO Local, Acquisition, Agents IA */}
      <ExecutiveCapabilities />

      {/* Sovereign Ribbon */}
      <AfricanPatternRibbon label="RÉSULTATS DE TERRAIN & PREUVES D'EXÉCUTION" />

      {/* 04 // Rich Executive Portfolio & Real Case Studies */}
      <ExecutivePortfolio />

      {/* 05 // Confidential Advisory Intake & Direct VIP WhatsApp */}
      <ExecutiveAdvisory />
    </div>
  );
}
