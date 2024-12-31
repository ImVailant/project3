import { useEffect, useState } from 'react';
import { Product } from '../types/product';
import { getProducts } from '../services/products';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await getProducts();
      if (error) {
        setError(error.message);
      } else {
        setProducts(data || []);
      }
      setLoading(false);
    }

    fetchProducts();
  }, []);

  return { products, loading, error };
}