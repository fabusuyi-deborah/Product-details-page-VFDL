"use client";
import React from 'react';
import ProductCard from '@/app/components/products/productCard/page';
import { ProductProps } from '@/app/types/types';
import Link from 'next/link';

interface ProductGridProps {
  products: ProductProps[];
  title?: string;
  viewAllLink?: string;
}

export function ProductGrid({ products, title, viewAllLink }: ProductGridProps): React.ReactElement {
  return (
    <section className="w-full">
      {title && (
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {title}
          </h2>
          {viewAllLink && (
            <Link
              href={viewAllLink}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              View All
            </Link>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
