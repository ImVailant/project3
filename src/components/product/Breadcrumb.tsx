import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';

interface BreadcrumbProps {
  category: string;
  productName: string;
}

export function Breadcrumb({ category, productName }: BreadcrumbProps) {
  const navigate = useNavigate();
  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="flex items-center justify-between mb-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-black"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back
      </button>
      <div className="flex items-center text-sm">
        <Link to="/" className="text-gray-600 hover:text-black">Home</Link>
        <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
        <Link to={`/category/${category}`} className="text-gray-600 hover:text-black">
          {categoryTitle}
        </Link>
        <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
        <span className="text-gray-900">{productName}</span>
      </div>
    </div>
  );
}