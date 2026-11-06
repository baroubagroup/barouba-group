import { redirect, notFound } from 'next/navigation';
import { getB2bComboBySlug } from '@/lib/solutionsData';

export const dynamic = 'force-dynamic';

export default async function LegacySolutionRedirect({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;
  const combo = getB2bComboBySlug(slug);

  if (!combo) {
    notFound();
  }

  // Permanent HTTP 308 redirect to the clean flat root URL
  redirect(`/${slug}`);
}
