import React from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { ProductList } from '../components/ProductList';
import { categories } from '../lib/data';

export function CategoryPage() {
  const { categoryId } = useParams();
  const { products } = useProducts();
  const category = categories.find(c => c.id === categoryId);

  if (!category) return null;

  const categoryProducts = products.filter(p => p.category.toLowerCase() === categoryId);

  return (
    <div className="pt-16">
      <div className="relative h-[40vh] mb-12">
        <img
          src={category.imageUrl}
          alt={category.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">{category.title}</h1>
            <p className="text-lg max-w-2xl">{category.description}</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <ProductList products={categoryProducts} />
      </div>
    </div>
  );
}