import { getActiveProducts } from '@/features/products/api';
import { getCategories } from '@/features/categories/api';
import { CatalogView } from '@/components/CatalogView';

export default async function HomePage() {
  const [products, categories] = await Promise.all([getActiveProducts(), getCategories()]);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      {/* Encabezado */}
      <div className="mb-12 border-b border-border pb-8">
        <h1 className="font-heading text-5xl sm:text-6xl text-soft-black tracking-tight">
          Pantalones
        </h1>
        <p className="mt-2 font-sans text-xs text-muted tracking-widest uppercase">
          {products.length} {products.length === 1 ? 'pieza' : 'piezas'}
        </p>
      </div>

      <CatalogView products={products} categories={categories} />
    </div>
  );
}
