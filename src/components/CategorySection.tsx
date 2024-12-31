import React from 'react';
import { CategorySection as CategorySectionType } from '../types/category';
import { ProductList } from './ProductList';
import { useProducts } from '../hooks/useProducts';

interface CategorySectionProps {
  category: CategorySectionType;
}

export function CategorySection({ category }: CategorySectionProps) {
  const { products } = useProducts();
  const categoryProducts = products.filter(p => p.category.toLowerCase() === category.id);

  return (
    <section id={category.id} className="py-16 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative h-[40vh] mb-12 rounded-lg overflow-hidden">
          <img
            src={category.imageUrl}
            alt={category.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">{category.title}</h2>
              <p className="text-lg max-w-2xl">{category.description}</p>
            </div>
          </div>
        </div>
        <ProductList products={categoryProducts} />
      </div>
    </section>
  );
}