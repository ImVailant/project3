import React from 'react';

interface SizeSelectorProps {
  value: string;
  onChange: (size: string) => void;
  sizes: string[];
}

export function SizeSelector({ value, onChange, sizes }: SizeSelectorProps) {
  return (
    <div>
      <h3 className="text-sm font-medium mb-2">Select Size</h3>
      <div className="grid grid-cols-5 gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onChange(size)}
            className={`py-2 text-center border ${
              value === size
                ? 'border-black bg-black text-white'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}