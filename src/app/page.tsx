import { getActiveProducts } from '@/features/products/api';
import { getCategories } from '@/features/categories/api';
import { CatalogView } from '@/components/CatalogView';
import { Hero } from '@/components/Hero';

export default async function HomePage() {
  const [products, categories] = await Promise.all([getActiveProducts(), getCategories()]);

  return (
    <>
      {/* Hero pantalla completa */}
      <Hero />

      {/* Catálogo */}
      <section id="productos" className="max-w-screen-xl mx-auto px-4 py-16">
        {/* Encabezado de sección */}
        <div className="mb-10 flex items-end justify-between border-b border-border pb-6">
          <div>
            <h1 className="font-heading text-4xl sm:text-5xl text-soft-black">Colección</h1>
            <p className="mt-1 font-sans text-xs text-muted tracking-widest uppercase">
              {products.length} {products.length === 1 ? 'pieza' : 'piezas'}
            </p>
          </div>
        </div>

        <CatalogView products={products} categories={categories} />
      </section>
    </>
  );
}
