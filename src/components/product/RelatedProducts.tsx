import React from 'react';
import { useProducts } from '../../hooks/useProducts';
import { ProductCard } from '../ProductCard';

interface RelatedProductsProps {
  categoryId: string;
  currentProductId: string;
}

export function RelatedProducts({ categoryId, currentProductId }: RelatedProductsProps) {
  const { products } = useProducts();
  const relatedProducts = products
    .filter(p => p.category === categoryId && p.id !== currentProductId)
    .slice(0, 4);

  if (relatedProducts.length === 0) return null;

  return (
    <div className="mt-16 pt-16 border-t">
      <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {relatedProducts.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}