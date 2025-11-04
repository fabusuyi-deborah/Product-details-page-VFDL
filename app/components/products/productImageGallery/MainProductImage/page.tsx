"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Share2, Heart } from 'lucide-react';
import ProductThumbnail from '@/app/components/products/productImageGallery/productThumbnails/page';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export  default function ProductImageGallery({ 
  images, 
  productName 
}: ProductImageGalleryProps): React.ReactElement {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handlePrevious = (): void => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (): void => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleShare = (): void => {
    // Add share functionality
    console.log('Share clicked');
  };

  const handleWishlist = (): void => {
    // Add wishlist functionality
    console.log('Wishlist clicked');
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-3/4 bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src={images[selectedIndex]}
          alt={`${productName} - Main view`}
          fill
          className="object-cover"
          priority
        />

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Action Icons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button
            onClick={handleShare}
            className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Share product"
          >
            <Share2 className="w-5 h-5" />
          </button>

          <button
            onClick={handleWishlist}
            className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Add to wishlist"
          >
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Thumbnails */}
      <ProductThumbnail
        images={images}
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}
        productName={productName}
      />
    </div>
  );
}