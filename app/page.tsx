import { products } from '@/lib/products';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';

interface HomeProps {
  searchParams: { category?: string };
}

export default function Home({ searchParams }: HomeProps) {
  const category = searchParams.category as 'Beauty' | 'Home' | 'Tech' | undefined;
  
  const filteredProducts = category
    ? products.filter(product => product.category === category)
    : products;

  return (
    <main className="min-h-screen">
      <Hero />
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
