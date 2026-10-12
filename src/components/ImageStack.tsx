import Image from 'next/image';

interface ImageStackProps {
  images: string[];
  productName: string;
}

export function ImageStack({ images, productName }: ImageStackProps) {
  const srcs = images.length > 0 ? images : ['/images/placeholder.svg'];

  return (
    <div className="flex flex-col gap-1">
      {srcs.map((src, i) => (
        <div key={i} className="relative w-full aspect-[3/4] bg-[#F0F0F0] overflow-hidden">
          <Image
            src={src}
            alt={i === 0 ? productName : `${productName} — vista ${i + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-contain"
            priority={i === 0}
          />
        </div>
      ))}
    </div>
  );
}
