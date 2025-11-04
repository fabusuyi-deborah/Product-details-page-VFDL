"use client";
import React from 'react';
import Image from 'next/image';

interface ProductThumbnailProps {
  productName: string;
  images: string[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

export default function ProductThumbnail({ productName, images, selectedIndex, onSelect }: ProductThumbnailProps): React.ReactElement {
  return (
    <div className="flex items-center gap-4 overflow-x-auto py-2">
      {images.map((image, index) => (
      <button
        key={index}
        onClick={() => onSelect(index)}
        className={`relative shrink-0 w-20 h-20 border rounded-lg overflow-hidden ${selectedIndex === index ? 'border-black' : 'border-gray-300'}`}>
        <Image src={image} alt={`${productName} - Image ${index + 1}`} fill style={{ objectFit: 'cover' }} />
        </button>
      ))}
    </div>
  );
} 