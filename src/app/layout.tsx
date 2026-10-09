import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500'],
  display: 'swap',
});

// Canela Regular (fuente comercial) — coloca canela-regular.woff2 en /public/fonts/
// El @font-face en globals.css la carga automáticamente cuando el archivo exista.

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://digital-collection-ca788.web.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'PIERA — Pantalones',
    template: '%s | PIERA',
  },
  description:
    'Catálogo PIERA: pantalones de calidad, diseño limpio y atemporal. Consulta disponibilidad directamente con nosotros.',
  openGraph: {
    type: 'website',
    siteName: 'PIERA',
    locale: 'es_CO',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={manrope.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
