import React from 'react';

interface ColorSelectorProps {
  value: string;
  onChange: (color: string) => void;
  colors: string[];
}

export function ColorSelector({ value, onChange, colors }: ColorSelectorProps) {
  return (
    <div>
      <h3 className="text-sm font-medium mb-2">Select Color</h3>
      <div className="flex gap-2">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => onChange(color)}
            className={`px-4 py-2 border ${
              value === color
                ? 'border-black bg-black text-white'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}