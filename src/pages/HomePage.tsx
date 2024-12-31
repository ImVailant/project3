import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { PopularProducts } from '../components/PopularProducts';
import { Newsletter } from '../components/Newsletter';

export function HomePage() {
  return (
    <div>
      <Hero />
      <main className="max-w-7xl mx-auto px-4 py-16">
        <FeaturedProducts />
        <PopularProducts />
      </main>
      <Newsletter />
    </div>
  );
}