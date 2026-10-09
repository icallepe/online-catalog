import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-paper border-b border-border">
      <div className="max-w-screen-xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-heading text-2xl tracking-[0.25em] uppercase text-soft-black hover:text-terracotta transition-colors"
        >
          PIERA
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="font-sans text-xs uppercase tracking-widest text-muted hover:text-soft-black transition-colors"
          >
            Catálogo
          </Link>
        </nav>
      </div>
    </header>
  );
}
