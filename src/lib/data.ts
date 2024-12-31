import { CategorySection } from '../types/category';

export const products = [
  {
    id: "1",
    name: "Classic White T-Shirt",
    price: 29.99,
    description: "Essential cotton t-shirt in classic white",
    image_url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "men",
    stock: 100,
    created_at: new Date().toISOString()
  },
  {
    id: "2",
    name: "Women's Denim Jeans",
    price: 79.99,
    description: "Classic blue denim jeans",
    image_url: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "women",
    stock: 50,
    created_at: new Date().toISOString()
  },
  {
    id: "3",
    name: "Leather Jacket",
    price: 199.99,
    description: "Premium leather jacket in black",
    image_url: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "men",
    stock: 25,
    created_at: new Date().toISOString()
  },
  {
    id: "4",
    name: "Designer Handbag",
    price: 299.99,
    description: "Luxury leather handbag",
    image_url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "accessories",
    stock: 15,
    created_at: new Date().toISOString()
  },
  {
    id: "5",
    name: "Summer Dress",
    price: 89.99,
    description: "Floral print summer dress",
    image_url: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "women",
    stock: 30,
    created_at: new Date().toISOString()
  },
  {
    id: "6",
    name: "Classic Watch",
    price: 159.99,
    description: "Timeless design watch",
    image_url: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "accessories",
    stock: 20,
    created_at: new Date().toISOString()
  },
  {
    id: "7",
    name: "Silk Blouse",
    price: 119.99,
    description: "Elegant silk blouse for any occasion",
    image_url: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "women",
    stock: 40,
    created_at: new Date().toISOString()
  },
  {
    id: "8",
    name: "Men's Suit",
    price: 399.99,
    description: "Classic fit wool suit",
    image_url: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "men",
    stock: 20,
    created_at: new Date().toISOString()
  },
  {
    id: "9",
    name: "Designer Sunglasses",
    price: 199.99,
    description: "Premium UV protection sunglasses",
    image_url: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "accessories",
    stock: 30,
    created_at: new Date().toISOString()
  },
  {
    id: "10",
    name: "Evening Gown",
    price: 299.99,
    description: "Elegant evening dress for special occasions",
    image_url: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "women",
    stock: 15,
    created_at: new Date().toISOString()
  },

  {
    id: "11",
    name: "White Sneakers",
    price: 99.99,
    description: "Comfortable and stylish sneakers for everyday wear",
    image_url: "https://i8.amplience.net/i/jpl/jd_030664_a",
    category: "men",
    stock: 60,
    created_at: new Date().toISOString()
  },
  {
    id: "12",
    name: "High-Heel Sandals",
    price: 79.99,
    description: "Chic high-heel sandals perfect for any occasion",
    image_url: "https://portlux.pt/images/thumbs/0005730_high-heel-open-sandals.webp",
    category: "women",
    stock: 40,
    created_at: new Date().toISOString()
  },
  {
    id: "13",
    name: "Wool Scarf",
    price: 49.99,
    description: "Soft and warm wool scarf for chilly days",
    image_url: "https://assets.manufactum.de/p/210/210779/210779_01.jpg/ladies-scarf-wool-cotton.jpg",
    category: "accessories",
    stock: 70,
    created_at: new Date().toISOString()
  },
  {
    id: "14",
    name: "Running Shorts",
    price: 34.99,
    description: "Breathable shorts designed for workouts",
    image_url: "https://m.media-amazon.com/images/I/81jinNGmc0L._AC_UY1100_.jpg",
    category: "men",
    stock: 80,
    created_at: new Date().toISOString()
  },
  {
    id: "15",
    name: "Yoga Leggings",
    price: 59.99,
    description: "Comfortable and flexible leggings for yoga and exercise",
    image_url: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/df5ef5aa-9daf-4005-9c94-9b11cfeed1d8/W+NY+DF+HR+YOGA+7%2F8+TGHT.png",
    category: "women",
    stock: 50,
    created_at: new Date().toISOString()
  },
  {
    id: "16",
    name: "Beanie Hat",
    price: 19.99,
    description: "Trendy and warm knit beanie hat",
    image_url: "https://i.ebayimg.com/images/g/4XUAAOSwhN9lYG7O/s-l400.jpg",
    category: "accessories",
    stock: 100,
    created_at: new Date().toISOString()
  },
  {
    id: "17",
    name: "Puffer Jacket",
    price: 129.99,
    description: "Lightweight and insulated puffer jacket",
    image_url: "https://moncler-cdn.thron.com/delivery/public/image/moncler/J29541A1252068950U99_F/dpx6uv/std/0x0/J29541A1252068950U99_F.jpg",
    category: "men",
    stock: 25,
    created_at: new Date().toISOString()
  },
  {
    id: "18",
    name: "Cotton Pajama Set",
    price: 49.99,
    description: "Soft cotton pajama set for a comfortable night",
    image_url: "https://www.havenwellwithin.com/dw/image/v2/BKGN_PRD/on/demandware.static/-/Sites-master-catalog-talbots/default/dw83dae857/images/241735626/241735626_4466.jpg?sfrm=jpg",
    category: "women",
    stock: 30,
    created_at: new Date().toISOString()
  },
  {
    id: "19",
    name: "Running Shoes",
    price: 119.99,
    description: "High-performance running shoes for athletes",
    image_url: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/aa151331-0d75-4744-8e47-cfb7ec0fdfb0/NIKE+ZOOMX+INVINCIBLE+RUN+FK3.png",
    category: "men",
    stock: 50,
    created_at: new Date().toISOString()
  },
  {
    id: "20",
    name: "Wide-Brim Hat",
    price: 39.99,
    description: "Stylish wide-brim hat for sunny days",
    image_url: "https://www.elevenworkwear.com.au/Images/ProductImages/Original/E3983_1_S.jpg",
    category: "accessories",
    stock: 20,
    created_at: new Date().toISOString()
  }
];

export const categories: CategorySection[] = [
  {
    id: 'new-arrivals',
    title: 'New Arrivals',
    description: 'Discover our latest collection of trending styles',
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
  },
  {
    id: 'women',
    title: 'Women\'s Collection',
    description: 'Elegant and stylish clothing for the modern woman',
    imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
  },
  {
    id: 'men',
    title: 'Men\'s Collection',
    description: 'Contemporary and classic styles for every occasion',
    imageUrl: 'https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
  },
  {
    id: 'accessories',
    title: 'Accessories',
    description: 'Complete your look with our premium accessories',
    imageUrl: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
  },
  {
    id: 'sale',
    title: 'Sale',
    description: 'Don\'t miss out on our amazing deals',
    imageUrl: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
  }
];