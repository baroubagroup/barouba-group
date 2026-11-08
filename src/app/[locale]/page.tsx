import type { Metadata } from 'next';
import HeroShowcase from '@/components/v2/HeroShowcase';
import InteractiveCards from '@/components/v2/InteractiveCards';
import WorkflowProcess from '@/components/v2/WorkflowProcess';
import AgencyComparator from '@/components/v2/AgencyComparator';
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
      ? 'BAROUBA GROUP : N°1 du Marketing Digital & Web d’Élite au Burkina Faso'
      : 'BAROUBA GROUP: #1 Digital Marketing & Elite Web Agency in Burkina Faso',
    description: locale === 'fr'
      ? 'Agence n°1 en Marketing Digital au Burkina Faso (Ouagadougou & Bobo-Dioulasso) : Acquisition publicitaire Meta & TikTok Ads, création web Next.js 16, community management 7j/7 et tunnels WhatsApp à fort ROI.'
      : '#1 Digital Marketing agency in Burkina Faso (Ouagadougou & Bobo-Dioulasso): Meta & TikTok Ads acquisition, Next.js 16 web development, 7/7 community management and high-ROI WhatsApp funnels.',
    keywords: [
      'marketing digital burkina faso',
      'marketing digital au burkina faso',
      'agence marketing digital burkina faso',
      'agence marketing digital ouagadougou',
      'agence communication digitale burkina faso',
      'meilleure agence marketing digital burkina',
      'expert marketing digital ouagadougou',
      'publicite facebook ads burkina',
      'gestion reseaux sociaux burkina faso',
      'creation site web ouagadougou',
      'BAROUBA GROUP',
    ],
    alternates: {
      canonical: 'https://www.baroubagroup.com',
    },
    openGraph: {
      title: 'BAROUBA GROUP : N°1 du Marketing Digital & Web d’Élite au Burkina Faso',
      description: 'Cabinet n°1 en Marketing Digital au Burkina Faso (Ouagadougou & Bobo-Dioulasso) : Publicité Ads, création web Next.js 16, community management 7j/7 et tunnels WhatsApp.',
      url: 'https://www.baroubagroup.com',
      siteName: 'BAROUBA GROUP',
      locale: 'fr_FR',
      type: 'website',
    },
  };
}

export default async function HomePage({ params }: HomeProps) {
  return (
    <main>
      {/* 01 // Hero Showcase with 3D WebGL Background & Interactive Globe */}
      <HeroShowcase />

      {/* Frieze: African Geometric Craftsmanship */}
      <AfricanPatternRibbon label="HAUTE TECHNOLOGIE AFRICAINE & INTERNATIONALE" />

      {/* 02 // Core Capabilities with Stacking Card Deck */}
      <InteractiveCards />

      {/* Frieze: Method & Precision */}
      <AfricanPatternRibbon label="MÉTHODOLOGIE DE DÉPLOIEMENT & RIGUEUR LOGICIELLE" />

      {/* 03 // How We Work: 4-Step Agile Delivery & Sprint Methodology */}
      <WorkflowProcess />

      {/* Frieze: Why Choose Us */}
      <AfricanPatternRibbon label="COMPARAISON OBJECTIVE & DIFFÉRENCIATION RADICALE" />

      {/* 04 // Why Choose Us: Direct Matrix Comparison (Barouba vs Agency vs Freelance) */}
      <AgencyComparator />

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
