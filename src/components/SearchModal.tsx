import React, { useState, useEffect } from 'react';
import { X, Search as SearchIcon, Loader } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { searchProducts } from '../services/search';
import { Product } from '../types/product';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const searchTimeout = setTimeout(async () => {
      if (query.length >= 2) {
        setLoading(true);
        const searchResults = await searchProducts(query);
        setResults(searchResults);
        setLoading(false);
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(searchTimeout);
  }, [query]);

  if (!isOpen) return null;

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50">
      <div className="fixed inset-x-0 top-0 bg-white p-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <SearchIcon className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 p-2 outline-none"
              autoFocus
            />
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {loading ? (
            <div className="flex justify-center py-8">
              <Loader className="w-6 h-6 animate-spin" />
            </div>
          ) : results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-auto p-4">
              {results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleProductClick(product.id)}
                  className="flex items-center gap-4 p-2 hover:bg-gray-50 cursor-pointer rounded"
                >
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : query.length >= 2 ? (
            <p className="text-center text-gray-500 py-8">No products found</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}