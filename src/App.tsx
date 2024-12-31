import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductPage } from './pages/ProductPage';
import { SearchResultsPage } from './pages/SearchResultsPage';
import { AllProductsPage } from './pages/AllProductsPage';
import { ProfilePage } from './components/auth/ProfilePage';
import { CheckoutPage } from './pages/CheckoutPage';
import { CheckoutConfirmationPage } from './pages/CheckoutConfirmationPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/products" element={<AllProductsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/checkout/confirmation/:orderNumber" element={<CheckoutConfirmationPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}