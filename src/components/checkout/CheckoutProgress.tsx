import React from 'react';
import { Check } from 'lucide-react';

interface CheckoutProgressProps {
  currentStep: 'cart' | 'checkout' | 'confirmation';
}

export function CheckoutProgress({ currentStep }: CheckoutProgressProps) {
  const steps = [
    { id: 'cart', label: 'Cart' },
    { id: 'checkout', label: 'Checkout' },
    { id: 'confirmation', label: 'Confirmation' }
  ];

  return (
    <div className="flex justify-center">
      <div className="flex items-center space-x-4">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep === step.id
                    ? 'bg-black text-white'
                    : steps.indexOf({ id: currentStep, label: '' }) > index
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200'
                }`}
              >
                {steps.indexOf({ id: currentStep, label: '' }) > index ? (
                  <Check className="w-5 h-5" />
                ) : (
                  index + 1
                )}
              </div>
              <span className="ml-2 font-medium">{step.label}</span>
            </div>
            {index < steps.length - 1 && (
              <div className="w-16 h-0.5 bg-gray-200" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}