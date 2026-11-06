import { redirect, notFound } from 'next/navigation';
import { getCountryBySlug, getCityBySlug, getTerritoryServiceBySlug } from '@/lib/territoriesData';

const SERVICE_TO_FLAT_PREFIX: Record<string, string> = {
  'creation-site-internet': 'creation-site-web',
  'media-buyer': 'media-buyer',
  'publicite-facebook-tiktok-ads': 'media-buyer',
  'community-manager': 'community-manager',
  'conception-tunnel-de-vente': 'conception-tunnel-de-vente',
  'tunnels-de-vente-whatsapp': 'conception-tunnel-de-vente',
  'expert-whatsapp-business-api': 'expert-whatsapp-business-api',
  'strategie-acquisition-digitale': 'strategie-acquisition-digitale',
  'referencement-seo-local': 'referencement-seo-local',
  'agents-ia-automatisation': 'agents-ia-automatisation',
  'formations-metiers-du-web-ia': 'formation',
};

export const dynamic = 'force-dynamic';

export default async function LegacyTerritoryServiceRedirect({
  params,
}: {
  params: Promise<{ country: string; city: string; service: string; locale: string }>;
}) {
  const { country: countrySlug, city: citySlug, service: serviceSlug } = await params;
  const country = getCountryBySlug(countrySlug);
  const city = getCityBySlug(countrySlug, citySlug);
  const service = getTerritoryServiceBySlug(serviceSlug);

  if (!country || !city || !service) {
    notFound();
  }

  const prefix = SERVICE_TO_FLAT_PREFIX[service.slug] || 'creation-site-web';
  const targetSlug = `${prefix}-${city.slug}`;

  // Permanent HTTP 308 redirect to the flat root URL
  redirect(`/${targetSlug}`);
}
