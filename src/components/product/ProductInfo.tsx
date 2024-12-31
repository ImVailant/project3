import React from 'react';
import { Star, Truck, Shield } from 'lucide-react';
import { Product } from '../../types/product';

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-gray-500 mb-1">SKU: {product.id}</p>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">4.0 (24 reviews)</span>
        </div>
      </div>

      <div className="flex items-baseline gap-4">
        <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
        {product.price > 100 && (
          <span className="text-lg text-gray-500 line-through">
            ${(product.price * 1.2).toFixed(2)}
          </span>
        )}
      </div>

      <div className="prose prose-sm text-gray-600">
        <p>{product.description}</p>
      </div>

      <div className="space-y-4 border-t border-b py-4">
        <div className="flex items-center gap-3">
          <Truck className="w-5 h-5 text-gray-400" />
          <div>
            <p className="font-medium">Free Shipping</p>
            <p className="text-sm text-gray-500">2-3 business days</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Shield className="w-5 h-5 text-gray-400" />
          <div>
            <p className="font-medium">1 Year Warranty</p>
            <p className="text-sm text-gray-500">100% Authentic Products</p>
          </div>
        </div>
      </div>
    </div>
  );
}