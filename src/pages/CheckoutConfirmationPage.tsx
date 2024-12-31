import React from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { CheckoutProgress } from '../components/checkout/CheckoutProgress';
import { CheckCircle } from 'lucide-react';

export function CheckoutConfirmationPage() {
  const { orderNumber } = useParams();
  const location = useLocation();
  const { orderDetails } = location.state || {};

  if (!orderDetails) {
    return (
      <div className="pt-24 pb-16 text-center">
        <p>Order not found</p>
        <Link to="/" className="text-blue-600 hover:underline">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        <CheckoutProgress currentStep="confirmation" />
        
        <div className="bg-white p-8 rounded-lg shadow-lg mt-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          
          <h1 className="text-3xl font-bold mb-2">Thank You for Your Order!</h1>
          <p className="text-gray-600 mb-6">
            Your order has been successfully placed and will be processed shortly.
          </p>
          
          <div className="text-left bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4">Order Details</h2>
            <p className="mb-2">
              <span className="font-medium">Order Number:</span> {orderNumber}
            </p>
            <p className="mb-4">
              <span className="font-medium">Estimated Delivery:</span>{' '}
              {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
            </p>
            
            <h3 className="font-medium mb-2">Shipping Address:</h3>
            <p className="text-gray-600">
              {orderDetails.shippingAddress.street}<br />
              {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.postalCode}
            </p>
          </div>
          
          <Link
            to="/"
            className="inline-block bg-black text-white px-8 py-3 rounded hover:bg-gray-800"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}