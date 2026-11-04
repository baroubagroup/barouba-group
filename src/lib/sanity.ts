// Fichier mocké temporaire après le retrait de Sanity
// Sera remplacé par Supabase dans la prochaine étape.

import { mockPosts, mockProjects, mockFormations, BlogPost } from './data';
import { BOUTIQUE_PRODUCTS, getBoutiqueProductBySlug } from './boutiqueData';

export const sanityClient = {
  fetch: async (...args: any[]): Promise<any> => [],
};

export const urlFor = (...args: any[]) => {
  return { url: () => '' };
};

export const getHomePage = async (...args: any[]): Promise<any> => ({});
export const getPostsByLocale = async (...args: any[]): Promise<any[]> => mockPosts;
export const getPostBySlug = async (slug: string, ...args: any[]): Promise<BlogPost | null> => mockPosts.find(p => p.slug.current === slug) || null;
export const getProjects = async (...args: any[]): Promise<any[]> => mockProjects;
export const getProjectBySlug = async (...args: any[]): Promise<any> => mockProjects[0];
export const getServices = async (...args: any[]): Promise<any[]> => []; // Services page has its own DEFAULT_SERVICES now
export const getServiceBySlug = async (...args: any[]): Promise<any> => ({});
export const getFormations = async (...args: any[]): Promise<any[]> => mockFormations;
export const getFormationsPage = async (...args: any[]): Promise<any> => ({});
export const getFormationBySlug = async (slug: string, ...args: any[]): Promise<any> => mockFormations.find(f => f.slug.current === slug) || mockFormations[0];
export const getProducts = async (...args: any[]): Promise<any[]> => BOUTIQUE_PRODUCTS;
export const getBoutiquePage = async (...args: any[]): Promise<any> => ({});
export const getProductBySlug = async (slug: string, ...args: any[]): Promise<any> => getBoutiqueProductBySlug(slug) || BOUTIQUE_PRODUCTS[0];
