import type { Metadata } from 'next';
import { Manrope, Cormorant } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500'],
  display: 'swap',
});

// Stand-in de Canela — swap por @font-face local cuando tengas los archivos .woff2
const cormorant = Cormorant({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400'],
  display: 'swap',
});

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
    <html lang="es" className={`${manrope.variable} ${cormorant.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
