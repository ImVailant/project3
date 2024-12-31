import { products } from '../lib/data';
import { Product } from '../types/product';

export async function getProducts(): Promise<{ data: Product[] | null; error: Error | null }> {
  try {
    return { data: products, error: null };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { data: null, error: error as Error };
  }
}

export async function getProductById(id: string): Promise<Product | null> {
  const product = products.find(p => p.id === id);
  if (!product) {
    return null;
  }
  return product;
}