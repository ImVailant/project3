import React, { useState, useMemo } from 'react';
import { useProducts } from '../hooks/useProducts';
import { ProductGrid } from '../components/ProductGrid';
import { Product } from '../types/product';

type FilterState = {
  category: string[];
  size: string[];
  priceRange: [number, number];
};

export function AllProductsPage() {
  const { products, loading } = useProducts();
  const [filters, setFilters] = useState<FilterState>({
    category: [],
    size: [],
    priceRange: [0, 1000],
  });

  const filteredProducts = useMemo(() => {
    return products
      .filter(product => {
        const categoryMatch = filters.category.length === 0 || 
          filters.category.includes(product.category);
        const sizeMatch = filters.size.length === 0 || 
          product.sizes?.some(size => filters.size.includes(size));
        const priceMatch = product.price >= filters.priceRange[0] && 
          product.price <= filters.priceRange[1];
        
        return categoryMatch && sizeMatch && priceMatch;
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [products, filters]);

  const handleCategoryChange = (category: string) => {
    setFilters(prev => ({
      ...prev,
      category: prev.category.includes(category)
        ? prev.category.filter(c => c !== category)
        : [...prev.category, category]
    }));
  };

  const handleSizeChange = (size: string) => {
    setFilters(prev => ({
      ...prev,
      size: prev.size.includes(size)
        ? prev.size.filter(s => s !== size)
        : [...prev.size, size]
    }));
  };

  const handlePriceChange = (value: [number, number]) => {
    setFilters(prev => ({
      ...prev,
      priceRange: value
    }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-1 space-y-6">
          <div>
            <h3 className="font-bold mb-2">Categories</h3>
            {['men', 'women', 'accessories'].map(category => (
              <label key={category} className="block">
                <input
                  type="checkbox"
                  checked={filters.category.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="mr-2"
                />
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </label>
            ))}
          </div>

          <div>
            <h3 className="font-bold mb-2">Sizes</h3>
            {['XS', 'S', 'M', 'L', 'XL'].map(size => (
              <label key={size} className="block">
                <input
                  type="checkbox"
                  checked={filters.size.includes(size)}
                  onChange={() => handleSizeChange(size)}
                  className="mr-2"
                />
                {size}
              </label>
            ))}
          </div>

          <div>
            <h3 className="font-bold mb-2">Price Range</h3>
            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              value={filters.priceRange[1]}
              onChange={(e) => handlePriceChange([filters.priceRange[0], Number(e.target.value)])}
              className="w-full"
            />
            <div className="flex justify-between text-sm">
              <span>${filters.priceRange[0]}</span>
              <span>${filters.priceRange[1]}</span>
            </div>
          </div>
        </div>

        <div className="col-span-3">
          <h1 className="text-2xl font-bold mb-6">All Products</h1>
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}