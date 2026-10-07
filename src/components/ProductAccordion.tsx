'use client';

import { useState } from 'react';

interface AccordionItem {
  title: string;
  content: string;
}

interface ProductAccordionProps {
  items: AccordionItem[];
}

export function ProductAccordion({ items }: ProductAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-4 font-sans text-xs uppercase tracking-widest text-soft-black hover:text-terracotta transition-colors text-left"
          >
            {item.title}
            <span className="text-base leading-none ml-4 flex-shrink-0">
              {open === i ? '−' : '+'}
            </span>
          </button>
          {open === i && (
            <p className="pb-4 font-sans text-sm text-soft-black/75 leading-relaxed">
              {item.content}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
