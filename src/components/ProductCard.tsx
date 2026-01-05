import Link from 'next/link';
import Image from 'next/image';
import { Star, Award } from 'lucide-react';
import { Product } from '@/lib/products';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const fullStars = Math.floor(product.rating);
  const hasHalfStar = product.rating % 1 >= 0.5;

  return (
    <div className="group relative overflow-hidden rounded-lg border border-slate-800 bg-slate-900/50 transition-all hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10">
      <div className="relative aspect-square w-full overflow-hidden bg-slate-800">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 right-3">
          <div className="flex items-center gap-1 rounded-full bg-slate-950/80 px-2 py-1 backdrop-blur-sm">
            <Award className="h-3 w-3 text-cyan-400" />
            <span className="text-xs font-medium text-slate-200">Editor's Pick</span>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-50 mb-1 line-clamp-2">
            {product.title}
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-4 w-4",
                    i < fullStars
                      ? "fill-cyan-400 text-cyan-400"
                      : i === fullStars && hasHalfStar
                      ? "fill-cyan-400/50 text-cyan-400/50"
                      : "fill-slate-700 text-slate-700"
                  )}
                />
              ))}
            </div>
            <span className="text-sm text-slate-400">{product.rating}</span>
          </div>
          <p className="text-2xl font-bold text-cyan-400">{product.price}</p>
        </div>

        <div className="flex gap-2 pt-2">
          <Link
            href={`/product/${product.slug}`}
            className="flex-1 rounded-md border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-center text-sm font-medium text-slate-200 transition-colors hover:border-slate-600 hover:bg-slate-800"
          >
            Read Review
          </Link>
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-md bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2.5 text-center text-sm font-semibold text-slate-950 transition-opacity hover:opacity-90"
          >
            Check Price
          </a>
        </div>
      </div>
    </div>
  );
}
