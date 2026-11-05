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
  };
}

export default async function HomePage({ params }: HomeProps) {
  return (
    <main>
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
