export type Category = 'new-arrivals' | 'women' | 'men' | 'accessories' | 'sale';

export interface CategorySection {
  id: Category;
  title: string;
  description: string;
  imageUrl: string;
}