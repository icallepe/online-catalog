import { getActiveProducts } from '@/features/products/api';
import { getCategories } from '@/features/categories/api';
import { CatalogView } from '@/components/CatalogView';

// Revalidación: como es export estático, los datos se leen en cada `next build`
export default async function HomePage() {
  const [products, categories] = await Promise.all([getActiveProducts(), getCategories()]);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      {/* Encabezado del catálogo */}
      <div className="mb-12 border-b border-border pb-8">
        <h1 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight">
          Catálogo
        </h1>
        <p className="mt-2 text-sm text-muted tracking-wide">
          {products.length} {products.length === 1 ? 'producto' : 'productos'}
        </p>
      </div>

      {/* Vista del catálogo con filtros (componente cliente) */}
      <CatalogView products={products} categories={categories} />
    </div>
  );
}
