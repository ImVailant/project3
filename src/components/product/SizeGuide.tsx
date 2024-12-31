import React from 'react';
import { Ruler } from 'lucide-react';

export function SizeGuide() {
  const sizeChart = [
    { size: 'XS', chest: '32-34', waist: '26-28', hips: '34-36' },
    { size: 'S', chest: '34-36', waist: '28-30', hips: '36-38' },
    { size: 'M', chest: '36-38', waist: '30-32', hips: '38-40' },
    { size: 'L', chest: '38-40', waist: '32-34', hips: '40-42' },
    { size: 'XL', chest: '40-42', waist: '34-36', hips: '42-44' },
  ];

  return (
    <div className="mt-8">
      <button className="flex items-center gap-2 text-gray-600 hover:text-black mb-4">
        <Ruler className="w-4 h-4" />
        <span className="text-sm">Size Guide</span>
      </button>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left font-medium">Size</th>
              <th className="px-4 py-2 text-left font-medium">Chest</th>
              <th className="px-4 py-2 text-left font-medium">Waist</th>
              <th className="px-4 py-2 text-left font-medium">Hips</th>
            </tr>
          </thead>
          <tbody>
            {sizeChart.map((row) => (
              <tr key={row.size} className="border-t">
                <td className="px-4 py-2 font-medium">{row.size}</td>
                <td className="px-4 py-2">{row.chest}"</td>
                <td className="px-4 py-2">{row.waist}"</td>
                <td className="px-4 py-2">{row.hips}"</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}