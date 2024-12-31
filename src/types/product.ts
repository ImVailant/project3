export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  image_url: string;
  category: string;
  stock: number;
  created_at: string;
  isNew?: boolean;
  sizes?: string[];
  discountPercentage?: number;
  saleEndDate?: string;
  badges?: {
    isNew?: boolean;
    isSale?: boolean;
    isLimitedTime?: boolean;
  };
}