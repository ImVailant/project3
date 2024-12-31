import { products } from '../lib/data';
import { Product } from '../types/product';

export async function searchProducts(query: string): Promise<Product[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const normalizedQuery = query.toLowerCase().trim();
  
  return products.filter(product => 
    product.name.toLowerCase().includes(normalizedQuery) ||
    product.description.toLowerCase().includes(normalizedQuery)
  );
}