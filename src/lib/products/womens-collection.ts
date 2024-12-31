import { Product } from '../../types/product';

export const womensProducts: Product[] = [
  {
    id: "w1",
    name: "Silk Evening Dress",
    price: 299.99,
    description: "Elegant silk evening dress in midnight blue",
    image_url: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1",
    category: "women",
    stock: 30,
    created_at: "2024-01-20T00:00:00Z",
    sizes: ["XS", "S", "M", "L"],
    badges: { isNew: true }
  },
  {
    id: "w2",
    name: "Cashmere Sweater",
    price: 129.99,
    originalPrice: 189.99,
    description: "Soft cashmere sweater in cream",
    image_url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
    category: "women",
    stock: 45,
    created_at: "2024-01-12T00:00:00Z",
    sizes: ["S", "M", "L"],
    discountPercentage: 31,
    badges: { isSale: true, isLimitedTime: true }
  }
  // Add 8 more products here
];