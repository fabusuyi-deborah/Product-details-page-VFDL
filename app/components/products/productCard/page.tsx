"use client";
import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { ProductProps } from '@/app/types/types';

interface ProductCardProps {
  product: ProductProps;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      {/* Product Image */}
      <div className="relative aspect-3/4 bg-gray-100 rounded-lg overflow-hidden mb-3">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        {/* Brand */}
        <p className="text-sm font-medium text-gray-900">
          {product.brand}
        </p>

        {/* Price */}
        <p className="text-lg font-bold text-gray-900">
          ${product.price}
        </p>

        {/* Product Name */}
        <p className="text-sm text-gray-600 line-clamp-1">
          {product.name}
        </p>

        {/* Rating and Sold Count */}
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
            <span className="font-medium text-gray-900">{product.rating}</span>
          </div>
          <span className="text-gray-500">
            {product.soldCount.toLocaleString()} Sold
          </span>
        </div>
      </div>
    </div>
  );
}