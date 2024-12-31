import React from 'react';
import { useProducts } from '../hooks/useProducts';
import { ProductCard } from './ProductCard';

export function PopularProducts() {
  const { products, loading } = useProducts();
  const popularProducts = products.slice(0, 4);

  if (loading) {
    return (
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-200 aspect-square rounded-lg mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Popular Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {popularProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}