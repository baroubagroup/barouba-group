import { redirect } from 'next/navigation';

// Redirect from /app/page.tsx to the default locale
export default function RootPage() {
  redirect('/fr');
}
