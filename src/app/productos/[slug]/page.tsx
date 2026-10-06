import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getActiveProducts, getProductBySlug } from '@/features/products/api';
import { getCategories } from '@/features/categories/api';
import { ImageGallery } from '@/components/ImageGallery';
import { ContactButtons } from '@/components/ContactButtons';
import Link from 'next/link';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const products = await getActiveProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  if (!product) return { title: 'Producto no encontrado' };

  return {
    title: product.name,
    description: product.description.slice(0, 160),
    openGraph: {
      title: `${product.name} | CALA`,
      description: product.description.slice(0, 160),
      images: product.images[0] ? [{ url: product.images[0], alt: product.name }] : [],
    },
  };
}

function formatPrice(price: number) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(price);
}

export default async function ProductPage({ params }: PageProps) {
  const [product, categories] = await Promise.all([getProductBySlug(params.slug), getCategories()]);

  if (!product) notFound();

  const category = categories.find((c) => c.id === product.categoryId);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 md:py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 font-sans text-xs text-muted uppercase tracking-widest">
        <Link href="/" className="hover:text-terracotta transition-colors">
          Catálogo
        </Link>
        {category && (
          <>
            <span>/</span>
            <span>{category.name}</span>
          </>
        )}
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        {/* Galería */}
        <div>
          <ImageGallery images={product.images} productName={product.name} />
        </div>

        {/* Info del producto */}
        <div className="flex flex-col gap-6 md:sticky md:top-20 md:self-start">
          {/* SKU */}
          {product.sku && (
            <span className="font-sans text-xs text-muted tracking-widest uppercase">
              {product.sku}
            </span>
          )}

          {/* Nombre */}
          <h1 className="font-heading text-3xl sm:text-4xl text-soft-black leading-tight">
            {product.name}
          </h1>

          {/* Precio */}
          {product.price !== undefined && (
            <p className="font-sans text-2xl font-medium text-terracotta">
              {formatPrice(product.price)}
            </p>
          )}

          <hr className="border-border" />

          {/* Descripción */}
          <div>
            <h2 className="font-sans text-xs uppercase tracking-widest text-muted mb-3">
              Descripción
            </h2>
            <p className="font-sans text-sm leading-relaxed text-soft-black/80">
              {product.description}
            </p>
          </div>

          <hr className="border-border" />

          {/* Botones de contacto */}
          <ContactButtons product={product} />

          <p className="font-sans text-xs text-muted leading-relaxed">
            Para consultar disponibilidad, tallas y métodos de pago, contáctanos directamente.
          </p>
        </div>
      </div>
    </div>
  );
}
