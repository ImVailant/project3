import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../hooks/useAuth';
import { CheckoutProgress } from '../components/checkout/CheckoutProgress';
import { OrderSummary } from '../components/checkout/OrderSummary';
import { CheckoutForm } from '../components/checkout/CheckoutForm';

export function CheckoutPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { items, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/login?redirect=/checkout');
    }
  }, [user, navigate]);

  if (!user || items.length === 0) {
    return null;
  }

  const handleSubmit = async (formData: any) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Generate random order number
    const orderNumber = Math.random().toString(36).substring(2, 15);
    
    // Clear cart and redirect to confirmation
    clearCart();
    navigate(`/checkout/confirmation/${orderNumber}`, { 
      state: { 
        orderDetails: {
          items,
          total: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
          shippingAddress: formData.shippingAddress,
          orderNumber
        }
      }
    });
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <CheckoutProgress currentStep="checkout" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <CheckoutForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
          </div>
          
          <div className="lg:col-span-1">
            <OrderSummary items={items} />
          </div>
        </div>
      </div>
    </div>
  );
}