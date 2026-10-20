import Link from 'next/link';

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 md:py-24">
      <nav aria-label="Ruta de navegación" className="mb-10">
        <Link
          href="/"
          className="font-sans text-xs uppercase tracking-widest text-muted hover:text-terracotta transition-colors"
        >
          ← Catálogo
        </Link>
      </nav>
      <header className="mb-12">
        <h1 className="font-heading text-3xl md:text-4xl uppercase tracking-wide text-soft-black mb-3">
          {title}
        </h1>
        <p className="font-sans text-xs text-muted tracking-wider">
          Última actualización: {lastUpdated}
        </p>
      </header>
      <div className="legal-prose">{children}</div>
    </div>
  );
}
