"use client";
import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumb(): React.ReactElement {
  return (
    <nav aria-label="Breadcrumb" className="m-6">
      <ol className="flex items-center gap-2 text-sm text-gray-600">
        <li className="flex items-center gap-2">
          <Link 
            href="/"
            className="hover:text-gray-900 transition-colors"
          >
            Homepage
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </li>
        
        <li className="flex items-center gap-2">
          <Link 
            href="/women"
            className="hover:text-gray-900 transition-colors"
          >
            Women
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </li>
        
        <li className="flex items-center gap-2">
          <Link 
            href="/women/shirts-tops"
            className="hover:text-gray-900 transition-colors"
          >
            Women Shirts & Tops
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </li>
        
        <li>
          <span className="text-gray-900 font-medium">
            Long Sleeve Overshirt, Khaki, 6
          </span>
        </li>
      </ol>
    </nav>
  );
}