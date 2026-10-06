'use client';

import { useMemo, useState } from 'react';
import type { Product } from '@/features/products/types';
import type { Category } from '@/features/categories/types';
import { ProductCard } from './ProductCard';

interface CatalogViewProps {
  products: Product[];
  categories: Category[];
}

export function CatalogView({ products, categories }: CatalogViewProps) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('');

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = activeCategory === '' || p.categoryId === activeCategory;
      const matchesSearch = search === '' || p.name.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, search, activeCategory]);

  return (
    <div>
      {/* Búsqueda */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <input
            type="search"
            placeholder="Buscar pantalones..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-border bg-paper px-4 py-3 font-sans text-sm text-soft-black placeholder:text-muted focus:outline-none focus:border-terracotta transition-colors"
          />
        </div>
      </div>

      {/* Filtro por categoría — solo visible cuando hay más de una */}
      {categories.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-border">
          <button
            onClick={() => setActiveCategory('')}
            className={[
              'font-sans text-xs uppercase tracking-widest px-3 py-1.5 transition-colors',
              activeCategory === ''
                ? 'bg-terracotta text-ivory'
                : 'text-muted hover:text-soft-black',
            ].join(' ')}
          >
            Todo
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={[
                'font-sans text-xs uppercase tracking-widest px-3 py-1.5 transition-colors',
                activeCategory === cat.id
                  ? 'bg-terracotta text-ivory'
                  : 'text-muted hover:text-soft-black',
              ].join(' ')}
            >
              {cat.name}
            </button>
          ))}
        </div>
      )}

      {/* Grid de productos */}
      {filtered.length === 0 ? (
        <div className="py-24 text-center">
          <p className="font-sans text-sm text-muted uppercase tracking-widest">
            No se encontraron productos
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
