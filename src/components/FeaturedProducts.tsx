import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { products } from '../lib/data'; // Importando todos os produtos do arquivo data.ts

export function FeaturedProducts() {
  const { addItem } = useCart();

  const handleAddToCart = (product: any, e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image_url: product.image_url,
      description: product.description,
      category: product.category,
      stock: product.stock,
      created_at: product.created_at
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden group relative">
                <div className="relative">
                  <img
                    src={product.image_url} // Usando o campo image_url do data.ts
                    alt={product.name}
                    className="w-full h-96 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-gray-600">${product.price}</p>
                    <button 
                      onClick={(e) => handleAddToCart(product, e)}
                      className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
