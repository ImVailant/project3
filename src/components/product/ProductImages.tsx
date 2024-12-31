import React, { useState } from 'react';
import { Product } from '../../types/product';

interface ProductImagesProps {
  product: Product;
}

export function ProductImages({ product }: ProductImagesProps) {
  const [mainImage, setMainImage] = useState(product.image_url);
  const additionalImages = [
    product.image_url,
    // Add more image URLs here when available
  ];

  return (
    <div className="space-y-4">
      <div className="aspect-square overflow-hidden">
        <img
          src={mainImage}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {additionalImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setMainImage(image)}
            className={`aspect-square overflow-hidden border-2 ${
              mainImage === image ? 'border-black' : 'border-transparent'
            }`}
          >
            <img
              src={image}
              alt={`${product.name} view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}