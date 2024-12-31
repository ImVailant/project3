import React from 'react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative h-[80vh]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Fashion collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-xl">
          <h1 className="text-5xl font-bold mb-6">New Collection 2024</h1>
          <p className="text-xl mb-8">
            Discover our latest collection of premium clothing designed for style and comfort.
          </p>
          <Link 
            to="/products" 
            className="inline-block bg-white text-black px-8 py-3 text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}