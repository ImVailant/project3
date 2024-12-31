import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { Product } from '../types/product';

interface ProductCardProps extends Product {}

export function ProductCard({ 
  id, 
  name, 
  price, 
  originalPrice,
  image_url, 
  description 
}: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id,
      name,
      price,
      image_url,
      description,
      category: '',
      stock: 1,
      created_at: new Date().toISOString()
    });
  };

  return (
    <Link to={`/product/${id}`} className="block group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
        <div className="aspect-square overflow-hidden">
          <img 
            src={image_url} 
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.src = 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80';
            }}
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-xl font-bold">${price.toFixed(2)}</span>
              {originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <button 
              onClick={handleAddToCart}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}