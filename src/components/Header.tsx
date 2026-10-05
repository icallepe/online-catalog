import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-paper border-b border-border">
      <div className="max-w-screen-xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-[0.3em] uppercase text-ink hover:opacity-70 transition-opacity"
        >
          CALA
        </Link>

        {/* Espacio reservado para futura navegación */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-xs uppercase tracking-widest text-muted hover:text-ink transition-colors"
          >
            Catálogo
          </Link>
        </nav>
      </div>
    </header>
  );
}
