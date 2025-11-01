"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Search, Heart, ChevronDown, ShoppingCart, User } from 'lucide-react';

export default function Header() {
  const [cartCount] = useState<number>(1);

  const handleSearch = (): void => {
    // I'll implement search functionality here
  };


  const handleSignIn = (): void => {
    // I might implement sign in functionality here
  };

  const handleCartClick = (): void => {
    // I'll add the cart functionality here
  };

  return (
    <>
      {/* Promo Banner */}
      <div className="bg-black text-white text-center py-2 px-4 text-sm">
        New season coming! Discount 10% for all product! Checkout Now!
        <span className="ml-4 text-xs">20d:40</span>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-dotted border-gray-400">
        <div className="max-w-[1512px] mx-auto px-8 py-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="">
              <Image
                src="/logo.png"
                alt="Logo"
                width={150}
                height={50}
              />
            </div>

            {/* Navigation Actions */}
            <div className="flex items-center gap-6">
              {/* Search */}
              <button 
                onClick={handleSearch}
                className=""
                aria-label="Search"
                type="button"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Categories Dropdown */}
              <button 
                className="flex items-center gap-1"
                type="button"
              >
                <span className="text-sm font-medium">Categories</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Sign In */}
              <button 
                onClick={handleSignIn}
                className="flex items-center gap-2"
                type="button"
              >
                <User className="w-5 h-5" />
                <span className="text-sm font-medium">Sign In</span>
              </button>

              {/* Wishlist */}
              <button 
                className=""
                aria-label="Wishlist"
                type="button"
              >
                <Heart className="w-5 h-5" />
              </button>

              {/* Shopping Cart */}
              <button 
                onClick={handleCartClick}
                className="relative"
                aria-label="Shopping cart"
                type="button"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                    {cartCount}
                  </span>
                )} 
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}