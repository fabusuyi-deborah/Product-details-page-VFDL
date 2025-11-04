"use client";
import React from 'react';
import Link from 'next/link';

interface ProductActionsProps {
  onAddToCart: () => void;
  onCheckout: () => void;
}

export  default function ProductActions({ 
  onAddToCart, 
  onCheckout 
}: ProductActionsProps): React.ReactElement {
  return (
    <div className="space-y-4">
      {/* Action Buttons */}
      <div className="flex gap-4">
        <button
          onClick={onAddToCart}
          className="flex-1 bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
        >
          Add To Cart
        </button>
        <button
          onClick={onCheckout}
          className="flex-1 bg-white text-gray-900 py-4 rounded-lg font-semibold border-2 border-gray-300 hover:border-gray-400 transition-colors"
        >
          Checkout Now
        </button>
      </div>

      {/* Delivery Info */}
      <div>
        <Link 
          href="/delivery-terms" 
          className="text-sm text-gray-600 hover:text-gray-900 underline"
        >
          Delivery T&C
        </Link>
      </div>
    </div>
  );
}