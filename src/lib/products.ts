export type Category = 'Beauty' | 'Home' | 'Tech';

export interface Product {
  id: string;
  slug: string;
  title: string;
  category: Category;
  price: string;
  rating: number;
  image: string;
  affiliateLink: string;
  description: string;
  pros: string[];
  cons: string[];
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'split-end-trimmer',
    title: 'Split End Trimmer',
    category: 'Beauty',
    price: '$29.99',
    rating: 4.5,
    image: '/images/Hair Trimmer.jpg',
    affiliateLink: 'https://amazon.com/dp/example1',
    description: 'Professional-grade split end trimmer that safely removes damaged hair without cutting length. Perfect for maintaining healthy-looking hair between salon visits.',
    pros: [
      'Prevents further hair damage',
      'Easy to use at home',
      'No heat required',
      'Works on all hair types'
    ],
    cons: [
      'Requires regular use for best results',
      'May take time to see visible improvement'
    ]
  },
  {
    id: '2',
    slug: 'pore-vacuum',
    title: 'Pore Vacuum',
    category: 'Beauty',
    price: '$49.99',
    rating: 4.3,
    image: 'https://via.placeholder.com/800x800/1e293b/64748b?text=Pore+Vacuum',
    affiliateLink: 'https://amazon.com/dp/example2',
    description: 'Deep cleansing pore vacuum with multiple suction levels and attachments. Effectively removes blackheads, whiteheads, and excess oil for clearer, smoother skin.',
    pros: [
      'Multiple suction levels',
      'Includes various attachments',
      'Visible results after first use',
      'Portable and rechargeable'
    ],
    cons: [
      'May cause redness on sensitive skin',
      'Requires proper technique'
    ]
  },
  {
    id: '3',
    slug: 'mini-printer',
    title: 'Mini Printer',
    category: 'Tech',
    price: '$79.99',
    rating: 4.7,
    image: 'https://via.placeholder.com/800x800/1e293b/64748b?text=Mini+Printer',
    affiliateLink: 'https://amazon.com/dp/example3',
    description: 'Compact portable printer that connects wirelessly to your phone. Print photos, documents, and stickers on-the-go with high-quality thermal printing technology.',
    pros: [
      'Wireless connectivity',
      'Compact and portable',
      'No ink required',
      'Works with smartphone apps'
    ],
    cons: [
      'Limited to thermal paper',
      'Smaller print size'
    ]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}
