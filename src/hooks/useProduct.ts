import { useState, useEffect } from 'react';
import { Product } from '../types/product';
import { getProductById } from '../services/products';

export function useProduct(productId: string | undefined) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      if (!productId) {
        setError(new Error('Product ID is required'));
        setLoading(false);
        return;
      }

      try {
        const fetchedProduct = await getProductById(productId);
        if (fetchedProduct) {
          setProduct(fetchedProduct);
        } else {
          setError(new Error('Product not found'));
        }
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    setLoading(true);
    fetchProduct();
  }, [productId]);

  return { product, loading, error };
}