import { notFound } from 'next/navigation';
import { getFormationBySlug } from '@/lib/sanity';
import type { Metadata } from 'next';
import FormationClient from './FormationClient';

interface FormationPageProps {
  params: Promise<{ slug: string[]; locale: string }>;
}

export async function generateMetadata({ params }: FormationPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slugArray = resolvedParams.slug;
  const slug = slugArray[slugArray.length - 1];
  const locale = resolvedParams.locale;
  const formation = await getFormationBySlug(slug, locale);
  
  if (!formation) return {};
  
  return {
    title: `${formation.title} | BAROUBA INTERNATIONAL GROUP`,
    description: formation.shortDescription,
  };
}

export default async function FormationSinglePage({ params }: FormationPageProps) {
  const resolvedParams = await params;
  const slugArray = resolvedParams.slug;
  const slug = slugArray[slugArray.length - 1];
  const locale = resolvedParams.locale;
  const formation = await getFormationBySlug(slug, locale);

  if (!formation) notFound();

  return <FormationClient formation={formation} />;
}
