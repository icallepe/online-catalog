'use client';

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

interface ImageCarouselProps {
  images: string[];
  productName: string;
}

export function ImageCarousel({ images, productName }: ImageCarouselProps) {
  const srcs = images.length > 0 ? images : ['/images/placeholder.svg'];
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            setCurrent(idx);
          }
        });
      },
      { root: track, threshold: 0.6 }
    );

    Array.from(track.children).forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, [srcs.length]);

  return (
    <div className="relative w-full">
      {/* Carrusel swipeable */}
      <div
        ref={trackRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {srcs.map((src, i) => (
          <div
            key={i}
            data-index={i}
            className="relative flex-shrink-0 w-full aspect-[3/4] bg-white snap-center"
          >
            <Image
              src={src}
              alt={i === 0 ? productName : `${productName} — vista ${i + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      {srcs.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-3">
          {srcs.map((_, i) => (
            <span
              key={i}
              className={`block rounded-full transition-all duration-300 ${
                i === current ? 'w-4 h-1 bg-soft-black' : 'w-1 h-1 bg-soft-black/30'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
