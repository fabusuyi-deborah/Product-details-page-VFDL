"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';
import ProductActions  from '@/app/components/products/productButton/page';

interface Color {
  name: string;
  value: string;
  hex: string;
}

interface ProductInfoProps {
  brand: string;
  name: string;
  originalPrice: number;
  currentPrice: number;
  rating: number;
  soldCount: number;
  description: string;
  colors: Color[];
  sizes: string[];
  selectedColor: string;
  selectedSize: string;
  onColorChange: (color: string) => void;
  onSizeChange: (size: string) => void;
}

export default function ProductInfo({
  brand,
  name,
  originalPrice,
  currentPrice,
  rating,
  soldCount,
  description,
  colors,
  sizes,
  selectedColor,
  selectedSize,
  onColorChange,
  onSizeChange
}: ProductInfoProps): React.ReactElement {
  const [showFullDescription, setShowFullDescription] = useState<boolean>(false);

  const truncatedDescription = description.length > 150 
    ? description.substring(0, 150) + '...' 
    : description;

  return (
    <div className="space-y-6">
      {/* Brand */}
      <p className="text-sm text-gray-600">{brand}</p>

      {/* Product Title */}
      <h1 className="text-3xl font-bold text-gray-900">{name}</h1>

      {/* Price and Rating */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-lg text-gray-400 line-through">
            £{originalPrice.toFixed(2)}
          </span>
          <span className="text-3xl font-bold text-gray-900">
            £{currentPrice.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <span className="text-gray-600">{soldCount.toLocaleString()} Sold</span>
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 fill-orange-400 text-orange-400" />
            <span className="font-semibold text-gray-900">{rating}</span>
          </div>
        </div>
      </div>

      <div>
        <hr className="border-t border-gray-200" />
      </div>
      {/* Description */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Description:</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          {showFullDescription ? description : truncatedDescription}
          {description.length > 150 && (
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="ml-1 text-gray-900 font-medium hover:underline"
            >
              {showFullDescription ? 'See Less' : 'See More...'}
            </button>
          )}
        </p>
      </div>

      {/* Color Selector */}
      <div>
        <div className="mb-3">
          <span className="text-sm text-gray-900">
            Color: <span className="font-semibold">{selectedColor}</span>
          </span>
        </div>
        <div className="flex gap-3">
          {colors.map((color) => (
            <button
              key={color.value}
              onClick={() => onColorChange(color.name)}
              className={`w-14 h-14 rounded-lg border-2 transition-all ${
                selectedColor === color.name
                  ? 'border-gray-900 scale-105'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              style={{ backgroundColor: color.hex }}
              aria-label={`Select ${color.name}`}
            />
          ))}
        </div>
      </div>

      {/* Size Selector */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-900">
            Size: <span className="font-semibold">{selectedSize}</span>
          </span>
          <Link 
            href="/size-chart" 
            className="text-sm text-gray-600 hover:text-gray-900 underline"
          >
            View Size Chart
          </Link>
        </div>
        <div className="flex gap-3 flex-wrap">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => onSizeChange(size)}
              className={`min-w-[30px] px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                selectedSize === size
                  ? 'border-gray-900 bg-gray-900 text-white'
                  : 'border-gray-300 text-gray-900 hover:border-gray-400'
              }`}
            >
              {size}
            </button>
          ))}
        </div>

      </div>

      {/* Action Buttons */}
      <ProductActions
        onAddToCart={() => {}}
        onCheckout={() => {}}
      />  
    </div>
  );
}

