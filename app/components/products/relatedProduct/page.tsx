"use client";
import ProductGrid  from '@/app/components/products/productCards/page';
import { ProductProps } from '@/app/types/types';
import React from 'react';

export default function RelatedProducts() {
  const sampleProducts: ProductProps[] = [
    {
      id: '1',
      image: '/product1.png',
      brand: 'Whistle',
      name: 'Wide Leg Cropped Jeans, Denim',
      price: 26,
      rating: 4.8,
      soldCount: 1238
    },
    {
      id: '2',
      image: '/product2.png',
      brand: 'John Lewis ANYDAY',
      name: 'Long Sleeve Utility Shirt, Navy, 6',
      price: 26,
      rating: 4.8,
      soldCount: 1238
    },
    {
      id: '3',
      image: '/product3.png',
      brand: 'John Lewis ANYDAY',
      name: 'Stripe Curved Hem Shirt, Blue',
      price: 32,
      rating: 4.5,
      soldCount: 620
    },
    {
      id: '4',
      image: '/product4.png',
      brand: 'John Lewis ANYDAY',
      name: 'Denim Overshirt, Mid Wash',
      price: 40,
      rating: 4.6,
      soldCount: 238
    },
    {
      id: '5',
      image: '/product5.png',
      brand: 'John Lewis',
      name: 'Linen Blazer, Navy',
      price: 79,
      rating: 4.8,
      soldCount: 1238
    }
  ];

  return (
    <div className="max-w-[1512px] mx-auto px-8 py-12">
      <ProductGrid 
        products={sampleProducts} 
        title="Related Products"
        viewAllLink="/products/related"
      />

      </div>
  );
}
