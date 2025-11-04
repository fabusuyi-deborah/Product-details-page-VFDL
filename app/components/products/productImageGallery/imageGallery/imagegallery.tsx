"use client";
import React from "react";
import ProductImageGallery from "../MainProductImage/mainimage";
import ProductInfo from "@/app/components/products/productInfo/productinfo";

export default function ImageGallery() {
  const productImages = [
    "/product-main.png",
    "/product-front.png",
    "/product-side.png",
    "/product-detail.png",
    "/product-full.png",
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left side - Image Gallery */}
        <ProductImageGallery
          images={productImages}
          productName="Long Sleeve Overshirt, Khaki, 6"
        />

        {/* Right side - Product Info */}
        <div className="flex flex-col justify-center">
          <ProductInfo
            brand="BrandName"
            name="Long Sleeve Overshirt, Khaki, 6"
            originalPrice={120}
            currentPrice={90}
            rating={4.5}
            soldCount={150}
            description="This long sleeve overshirt in khaki is perfect for layering during cooler months. Made from high-quality materials, it offers both comfort and style. The versatile design allows it to be dressed up or down, making it a staple piece in any wardrobe."
            colors={[
              { name: "Royal Brown", value: "royal-brown", hex: "#B5A99D" },
              { name: "Olive Green", value: "olive-green", hex: "#708238" },
              { name: "Navy Blue", value: "navy-blue", hex: "#1D3557" },
              { name: "Charcoal Gray", value: "charcoal-gray", hex: "#4A4A4A" },
            ]}
            sizes={["6", "8", "10", "14", "18", "22", "24"]}
            selectedColor="Royal Brown"
            selectedSize="8"
            onColorChange={() => {}}
            onSizeChange={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
