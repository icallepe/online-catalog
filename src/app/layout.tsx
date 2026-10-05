import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://digital-collection-ca788.web.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'CALA — Moda consciente y atemporal',
    template: '%s | CALA',
  },
  description:
    'Catálogo de moda CALA: prendas de calidad, diseño limpio y atemporal. Consulta disponibilidad directamente con nosotros.',
  openGraph: {
    type: 'website',
    siteName: 'CALA',
    locale: 'es_CO',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
