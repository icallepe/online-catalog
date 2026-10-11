'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header
      className={
        isHome
          ? 'absolute top-0 left-0 right-0 z-50'
          : 'sticky top-0 z-50 bg-white border-b border-border'
      }
    >
      <div className="max-w-screen-xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className={`font-heading text-2xl tracking-[0.25em] uppercase transition-colors ${
            isHome ? 'text-ivory hover:text-ivory/70' : 'text-soft-black hover:text-muted'
          }`}
        >
          PIERA
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`font-sans text-xs uppercase tracking-widest transition-colors ${
              isHome ? 'text-ivory/70 hover:text-ivory' : 'text-muted hover:text-soft-black'
            }`}
          >
            Catálogo
          </Link>
        </nav>
      </div>
    </header>
  );
}
