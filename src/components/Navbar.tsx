'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

const categories = [
  { name: 'All', href: '/' },
  { name: 'Beauty', href: '/?category=Beauty' },
  { name: 'Home', href: '/?category=Home' },
  { name: 'Tech', href: '/?category=Tech' },
];

export default function Navbar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category') || 'All';

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    router.push(value);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-slate-950/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              The Gadget Shelf
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className={cn(
                  "text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400"
                )}
              >
                {category.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <select 
              value={currentCategory === 'All' ? '/' : `/?category=${currentCategory}`}
              onChange={handleCategoryChange}
              className="bg-slate-900 border border-slate-800 rounded-md px-3 py-1.5 text-sm text-slate-300"
            >
              <option value="/">All</option>
              <option value="/?category=Beauty">Beauty</option>
              <option value="/?category=Home">Home</option>
              <option value="/?category=Tech">Tech</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}
