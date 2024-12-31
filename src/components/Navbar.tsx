import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, User } from 'lucide-react';
import { CartDropdown } from './CartDropdown';
import { SearchModal } from './SearchModal';
import { AuthModal } from './auth/AuthModal';
import { UserMenu } from './auth/UserMenu';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../hooks/useAuth';
import { categories } from '../lib/data';

export function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { items } = useCart();
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleUserIconClick = () => {
    if (user) {
      setIsUserMenuOpen(!isUserMenuOpen);
    } else {
      setIsAuthOpen(true);
    }
  };

  const handleLogout = () => {
    setUser(null);
    setIsUserMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold tracking-tight">
                GRIFZ
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {categories.map(category => (
                  <Link
                    key={category.id}
                    to={`/category/${category.id}`}
                    className="text-gray-800 hover:text-gray-600 transition-colors"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <button 
                className="hover:text-gray-600"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="w-5 h-5" />
              </button>
              <button 
                className="hover:text-gray-600 relative"
                onClick={handleUserIconClick}
              >
                <User className="w-5 h-5" />
                {user && isUserMenuOpen && (
                  <UserMenu
                    isOpen={isUserMenuOpen}
                    onClose={() => setIsUserMenuOpen(false)}
                    user={user}
                    onLogout={handleLogout}
                  />
                )}
              </button>
              <button 
                className="relative hover:text-gray-600"
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
        <CartDropdown isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </nav>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}