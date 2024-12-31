import React from 'react';
import { ShoppingBag, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../hooks/useAuth';

interface CartDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDropdown({ isOpen, onClose }: CartDropdownProps) {
  const { items, removeItem } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (!user) {
      // If user is not logged in, redirect to login with return URL
      navigate('/login?redirect=/checkout');
    } else {
      navigate('/checkout');
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-16 w-96 bg-white shadow-lg rounded-lg z-50 p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Shopping Cart</h3>
        <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
          <X className="w-5 h-5" />
        </button>
      </div>
      
      {items.length === 0 ? (
        <div className="text-center py-8">
          <ShoppingBag className="w-12 h-12 mx-auto text-gray-400 mb-2" />
          <p className="text-gray-500">Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="max-h-96 overflow-auto">
            {items.map((item) => (
              <div key={`cart-item-${item.id}`} className="flex items-center gap-4 py-2 border-b">
                <img src={item.image_url} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1">
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button 
                  onClick={() => removeItem(item.id)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t">
            <div className="flex justify-between mb-4">
              <span className="font-medium">Total:</span>
              <span className="font-bold">${total.toFixed(2)}</span>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}