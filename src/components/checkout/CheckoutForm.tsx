import React from 'react';
import { useForm } from 'react-hook-form';
import { Loader } from 'lucide-react';

interface CheckoutFormProps {
  onSubmit: (data: any) => void;
  isSubmitting: boolean;
}

export function CheckoutForm({ onSubmit, isSubmitting }: CheckoutFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-6">Shipping Information</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              {...register('fullName', { required: 'Full name is required' })}
              className="w-full p-2 border rounded"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName.message as string}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Street Address</label>
            <input
              type="text"
              {...register('shippingAddress.street', { required: 'Street address is required' })}
              className="w-full p-2 border rounded"
            />
            {errors.shippingAddress?.street && (
              <p className="text-red-500 text-sm mt-1">
                {errors.shippingAddress.street.message as string}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <input
                type="text"
                {...register('shippingAddress.city', { required: 'City is required' })}
                className="w-full p-2 border rounded"
              />
              {errors.shippingAddress?.city && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.shippingAddress.city.message as string}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Postal Code</label>
              <input
                type="text"
                {...register('shippingAddress.postalCode', { required: 'Postal code is required' })}
                className="w-full p-2 border rounded"
              />
              {errors.shippingAddress?.postalCode && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.shippingAddress.postalCode.message as string}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              {...register('phone', { required: 'Phone number is required' })}
              className="w-full p-2 border rounded"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message as string}</p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-6">Payment Method</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Payment Type</label>
            <select
              {...register('paymentMethod', { required: 'Payment method is required' })}
              className="w-full p-2 border rounded"
            >
              <option value="">Select payment method</option>
              <option value="credit">Credit Card</option>
              <option value="debit">Debit Card</option>
              <option value="paypal">PayPal</option>
            </select>
            {errors.paymentMethod && (
              <p className="text-red-500 text-sm mt-1">{errors.paymentMethod.message as string}</p>
            )}
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <Loader className="w-5 h-5 animate-spin mr-2" />
            Processing...
          </span>
        ) : (
          'Complete Purchase'
        )}
      </button>
    </form>
  );
}