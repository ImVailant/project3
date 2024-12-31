import { Product } from '../../types/product';
import { mensProducts } from './mens-collection';
import { womensProducts } from './womens-collection';
import { accessoriesProducts } from './accessories-collection';

export const allProducts: Product[] = [
  ...mensProducts,
  ...womensProducts,
  ...accessoriesProducts
];

export const newArrivals = allProducts
  .filter(product => product.badges?.isNew)
  .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
  .slice(0, 12);

export const saleProducts = allProducts
  .filter(product => product.badges?.isSale)
  .sort((a, b) => (b.discountPercentage || 0) - (a.discountPercentage || 0));

export function getProductsByCategory(category: string): Product[] {
  return allProducts.filter(product => product.category === category);
}

export function getDiscountedProducts(): Product[] {
  return allProducts.filter(product => product.discountPercentage && product.discountPercentage > 0);
}