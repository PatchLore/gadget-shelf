import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Star, Check, X } from 'lucide-react';
import { getProductBySlug } from '@/lib/products';
import StickyBottomBar from '@/components/StickyBottomBar';
import { cn } from '@/lib/utils';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const fullStars = Math.floor(product.rating);
  const hasHalfStar = product.rating % 1 >= 0.5;

  return (
    <>
      <main className="min-h-screen pb-20 md:pb-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Desktop: Split Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-12 items-start">
            <div className="relative aspect-square w-full rounded-lg overflow-hidden border border-slate-800 bg-slate-900">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-slate-50 mb-4">{product.title}</h1>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-5 w-5",
                          i < fullStars
                            ? "fill-cyan-400 text-cyan-400"
                            : i === fullStars && hasHalfStar
                            ? "fill-cyan-400/50 text-cyan-400/50"
                            : "fill-slate-700 text-slate-700"
                        )}
                      />
                    ))}
                  </div>
                  <span className="text-lg text-slate-400">{product.rating}</span>
                </div>
                <p className="text-3xl font-bold text-cyan-400 mb-6">{product.price}</p>
                <a
                  href={product.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-md bg-gradient-to-r from-cyan-400 to-violet-500 px-8 py-3 text-center text-base font-semibold text-slate-950 transition-opacity hover:opacity-90"
                >
                  Check Price on Amazon
                </a>
              </div>

              <div className="pt-6 border-t border-slate-800">
                <h2 className="text-xl font-semibold text-slate-50 mb-3">Description</h2>
                <p className="text-slate-300 leading-relaxed">{product.description}</p>
              </div>

              <div className="pt-6 border-t border-slate-800">
                <h2 className="text-xl font-semibold text-slate-50 mb-3">Why We Like It</h2>
                <p className="text-slate-300 leading-relaxed">
                  After extensive testing, we found this product delivers on its promises. The build quality is solid, and it performs as advertised. It's become a regular part of our routine.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-800">
                <div>
                  <h3 className="text-lg font-semibold text-slate-50 mb-3 flex items-center gap-2">
                    <Check className="h-5 w-5 text-cyan-400" />
                    Pros
                  </h3>
                  <ul className="space-y-2">
                    {product.pros.map((pro, index) => (
                      <li key={index} className="text-slate-300 flex items-start gap-2">
                        <Check className="h-4 w-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-50 mb-3 flex items-center gap-2">
                    <X className="h-5 w-5 text-violet-500" />
                    Cons
                  </h3>
                  <ul className="space-y-2">
                    {product.cons.map((con, index) => (
                      <li key={index} className="text-slate-300 flex items-start gap-2">
                        <X className="h-4 w-4 text-violet-500 mt-0.5 flex-shrink-0" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: Stacked Layout */}
          <div className="md:hidden space-y-6">
            <div className="relative aspect-square w-full rounded-lg overflow-hidden border border-slate-800 bg-slate-900">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-slate-50">{product.title}</h1>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-5 w-5",
                        i < fullStars
                          ? "fill-cyan-400 text-cyan-400"
                          : i === fullStars && hasHalfStar
                          ? "fill-cyan-400/50 text-cyan-400/50"
                          : "fill-slate-700 text-slate-700"
                      )}
                    />
                  ))}
                </div>
                <span className="text-lg text-slate-400">{product.rating}</span>
              </div>
              <p className="text-3xl font-bold text-cyan-400">{product.price}</p>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <h2 className="text-xl font-semibold text-slate-50 mb-3">Description</h2>
              <p className="text-slate-300 leading-relaxed">{product.description}</p>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <h2 className="text-xl font-semibold text-slate-50 mb-3">Why We Like It</h2>
              <p className="text-slate-300 leading-relaxed">
                After extensive testing, we found this product delivers on its promises. The build quality is solid, and it performs as advertised. It's become a regular part of our routine.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-slate-800">
              <div>
                <h3 className="text-lg font-semibold text-slate-50 mb-3 flex items-center gap-2">
                  <Check className="h-5 w-5 text-cyan-400" />
                  Pros
                </h3>
                <ul className="space-y-2">
                  {product.pros.map((pro, index) => (
                    <li key={index} className="text-slate-300 flex items-start gap-2">
                      <Check className="h-4 w-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-50 mb-3 flex items-center gap-2">
                  <X className="h-5 w-5 text-violet-500" />
                  Cons
                </h3>
                <ul className="space-y-2">
                  {product.cons.map((con, index) => (
                    <li key={index} className="text-slate-300 flex items-start gap-2">
                      <X className="h-4 w-4 text-violet-500 mt-0.5 flex-shrink-0" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <StickyBottomBar product={product} />
    </>
  );
}
