import type { Metadata } from 'next';
import '../../../src/styles/globals.css';

export const metadata: Metadata = {
  title: 'Admin | BAROUBA GROUP',
  robots: 'noindex, nofollow',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: 0, background: '#0a0a0f', color: '#fff', fontFamily: 'Inter, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
