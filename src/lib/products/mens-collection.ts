import { Product } from '../../types/product';

export const mensProducts: Product[] = [
  {
    id: "m1",
    name: "Premium Wool Blazer",
    price: 199.99,
    description: "Tailored fit wool blazer in charcoal grey",
    image_url: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0",
    category: "men",
    stock: 50,
    created_at: "2024-01-15T00:00:00Z",
    sizes: ["S", "M", "L", "XL"],
    badges: { isNew: true }
  },
  {
    id: "m2",
    name: "Slim Fit Chinos",
    price: 59.99,
    originalPrice: 79.99,
    description: "Classic khaki chinos with stretch comfort",
    image_url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80",
    category: "men",
    stock: 75,
    created_at: "2024-01-10T00:00:00Z",
    sizes: ["30", "32", "34", "36"],
    discountPercentage: 25,
    badges: { isSale: true }
  }
  // Add 8 more products here
];