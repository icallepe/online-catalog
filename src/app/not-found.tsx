import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-32 text-center">
      <p className="text-xs uppercase tracking-[0.4em] text-muted mb-4">404</p>
      <h1 className="text-3xl font-bold uppercase tracking-tight mb-6">
        Página no encontrada
      </h1>
      <p className="text-sm text-muted mb-10">
        El producto o la página que buscas no existe o fue removida.
      </p>
      <Link
        href="/"
        className="inline-block border border-ink px-8 py-3 text-xs uppercase tracking-widest hover:bg-ink hover:text-paper transition-colors"
      >
        Volver al catálogo
      </Link>
    </div>
  );
}
