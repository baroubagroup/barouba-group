import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|studio|admin|favicon.ico|sitemap.xml|robots.txt|google[a-zA-Z0-9]+\\.html|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|mp4|webm|html|txt|xml)).*)',
  ],
};
