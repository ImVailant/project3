import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { ProductGrid } from '../components/ProductGrid';
import { Search } from 'lucide-react';

export function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { products, loading } = useProducts(query);

  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Search Results</h1>
        <p className="text-gray-600">
          {loading ? 'Searching...' : 
           products.length === 0 ? 'No products found' :
           `Found ${products.length} products for "${query}"`}
        </p>
      </div>
      
      {loading ? (
        <div className="flex justify-center py-12">
          <Search className="w-8 h-8 animate-spin text-gray-400" />
        </div>
      ) : (
        <ProductGrid products={products} />
      )}
    </div>
  );
}