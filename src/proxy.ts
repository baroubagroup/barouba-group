import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const accept = request.headers.get('accept') || '';
  const pathname = request.nextUrl.pathname;

  // Handle Markdown content negotiation for AI agents & scrapers
  if (accept.includes('text/markdown')) {
    // 1. Agent-friendly 404 probe detection
    if (pathname.includes('404-probe') || pathname.startsWith('/__ora')) {
      return new NextResponse(
        `# 404 - Ressource Introuvable\n\nLa page demandée n'existe pas sur le portail BAROUBA GROUP.\nConsultez notre documentation IA complète : [llms.txt](https://www.baroubagroup.com/llms.txt) ou notre index sitemap [sitemap.xml](https://www.baroubagroup.com/sitemap.xml).`,
        {
          status: 404,
          headers: {
            'Content-Type': 'text/markdown; charset=utf-8',
            'Vary': 'Accept',
          },
        }
      );
    }

    // 2. Markdown content negotiation for homepage
    if (pathname === '/' || pathname === '/fr' || pathname === '/fr/') {
      const llmsUrl = new URL('/llms.txt', request.url);
      const res = NextResponse.rewrite(llmsUrl);
      res.headers.set('Content-Type', 'text/markdown; charset=utf-8');
      res.headers.set('Vary', 'Accept');
      return res;
    }
  }

  // 3. Permanent 308 redirect from root `/` to `/fr` (Consolidates PageRank & eliminates temporary redirect warning)
  if (pathname === '/') {
    const url = new URL('/fr', request.url);
    const res = NextResponse.redirect(url, 308);
    res.headers.set('Vary', 'Accept');
    return res;
  }

  const response = intlMiddleware(request);

  // 4. Upgrade any temporary 307 redirect to permanent 308 redirect for SEO authority consolidation
  if (response.status === 307) {
    const location = response.headers.get('location');
    if (location) {
      const permResponse = NextResponse.redirect(new URL(location, request.url), 308);
      response.headers.forEach((val, key) => {
        if (key.toLowerCase() !== 'location') {
          permResponse.headers.set(key, val);
        }
      });
      permResponse.headers.set('Vary', 'Accept');
      return permResponse;
    }
  }

  response.headers.set('Vary', 'Accept');
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|studio|admin|favicon.ico|sitemap.xml|robots.txt|llms.txt|llms-full.txt|google[a-zA-Z0-9]+\\.html|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|mp4|webm|html|txt|xml)).*)',
  ],
};
