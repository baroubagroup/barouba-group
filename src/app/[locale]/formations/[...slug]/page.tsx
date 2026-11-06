import { notFound } from 'next/navigation';
import { getFormationBySlug } from '@/lib/sanity';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import FormationClient from './FormationClient';

interface FormationPageProps {
  params: Promise<{ slug: string[]; locale: string }>;
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: FormationPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slugArray = resolvedParams.slug;
  const slug = slugArray[slugArray.length - 1];
  const locale = resolvedParams.locale;
  const formation = await getFormationBySlug(slug, locale);
  
  if (!formation) return {};
  
  return {
    title: `${formation.title} | Formations BAROUBA GROUP`,
    description: formation.shortDescription,
    alternates: {
      canonical: `https://www.baroubagroup.com/formations/${slugArray.join('/')}`,
    },
  };
}

export default async function FormationSinglePage({ params }: FormationPageProps) {
  const resolvedParams = await params;
  const slugArray = resolvedParams.slug;
  const slug = slugArray[slugArray.length - 1];
  const locale = resolvedParams.locale;
  setRequestLocale(locale);
  const formation = await getFormationBySlug(slug, locale);

  if (!formation) notFound();

  return <FormationClient formation={formation} />;
}
