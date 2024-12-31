import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingBag, Heart, Share2 } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useProduct } from '../hooks/useProduct';
import { Breadcrumb } from '../components/product/Breadcrumb';
import { ProductGallery } from '../components/product/ProductGallery';
import { ProductInfo } from '../components/product/ProductInfo';
import { SizeSelector } from '../components/product/SizeSelector';
import { SizeGuide } from '../components/product/SizeGuide';
import { RelatedProducts } from '../components/product/RelatedProducts';

export function ProductPage() {
  const { productId } = useParams();
  const { product, loading, error } = useProduct(productId);
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState('');

  if (loading) {
    return (
      <div className="pt-24 max-w-7xl mx-auto px-4">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-8" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="aspect-square bg-gray-200 rounded" />
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
              <div className="space-y-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-4 bg-gray-200 rounded" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="pt-24 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <p className="text-gray-600">The product you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select size');
      return;
    }
    addItem({
      ...product,
      selectedOptions: { size: selectedSize }
    });
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumb category={product.category} productName={product.name} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ProductGallery product={product} />
          
          <div className="space-y-8">
            <ProductInfo product={product} />

            <div className="space-y-6">
              <SizeSelector
                value={selectedSize}
                onChange={setSelectedSize}
                sizes={['XS', 'S', 'M', 'L', 'XL']}
              />

              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-black text-white py-3 px-6 flex items-center justify-center gap-2 hover:bg-gray-800"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Add to Cart
                </button>
                <button className="p-3 border hover:bg-gray-50">
                  <Heart className="w-5 h-5" />
                </button>
                <button onClick={handleShare} className="p-3 border hover:bg-gray-50">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <SizeGuide />
          </div>
        </div>

        <RelatedProducts categoryId={product.category} currentProductId={product.id} />
      </div>
    </div>
  );
}