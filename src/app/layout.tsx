import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
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
