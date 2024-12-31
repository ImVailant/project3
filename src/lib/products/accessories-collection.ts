import { Product } from '../../types/product';

export const accessoriesProducts: Product[] = [
  {
    id: "a1",
    name: "Leather Tote Bag",
    price: 249.99,
    description: "Premium leather tote with laptop compartment",
    image_url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    category: "accessories",
    stock: 25,
    created_at: "2024-01-18T00:00:00Z",
    badges: { isNew: true }
  },
  {
    id: "a2",
    name: "Designer Sunglasses",
    price: 149.99,
    originalPrice: 199.99,
    description: "UV protection sunglasses with gold accents",
    image_url: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    category: "accessories",
    stock: 40,
    created_at: "2024-01-05T00:00:00Z",
    discountPercentage: 25,
    badges: { isSale: true }
  }
  // Add 8 more products here
];