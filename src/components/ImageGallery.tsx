'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

export function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [selected, setSelected] = useState(0);
  const current = images[selected] ?? '/images/placeholder.svg';

  return (
    <div className="flex flex-col gap-3">
      {/* Imagen principal */}
      <div className="relative aspect-[3/4] bg-white overflow-hidden">
        <Image
          src={current}
          alt={`${productName} — imagen ${selected + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Miniaturas */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={[
                'relative flex-shrink-0 w-16 h-20 overflow-hidden transition-opacity',
                selected === i ? 'opacity-100 ring-1 ring-ink' : 'opacity-50 hover:opacity-80',
              ].join(' ')}
              aria-label={`Ver imagen ${i + 1}`}
            >
              <Image src={src} alt="" fill sizes="64px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
