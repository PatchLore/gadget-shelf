'use client';

import { Product } from '@/lib/products';

interface StickyBottomBarProps {
  product: Product;
}

export default function StickyBottomBar({ product }: StickyBottomBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-800 bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-slate-950/80 md:hidden">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-slate-400">Price</p>
            <p className="text-xl font-bold text-cyan-400">{product.price}</p>
          </div>
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-md bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition-opacity hover:opacity-90"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}
