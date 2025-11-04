"use client"
import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Mail, ChevronRight, ChevronDown } from "lucide-react"

export default function Footer(): React.ReactElement {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1512px] mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 sm:gap-0 pb-8 sm:border-b border-gray-200">
          {/* Left - Logo and Newsletter */}
          <div className="space-y-6">
            {/* Logo */}
            <div>
              <Image src="/logo.png" alt="John Lewis & Partners" width={150} height={50} />
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-700">Get latest offers to your inbox</span>
              <button className="bg-black text-white w-10 h-5 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <Link
                href="#"
                className=" flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-gray-700" />
              </Link>
              <Link
                href="#"
                className=" flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-gray-700" />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-gray-700" />
              </Link>
              <Link
                href="#"
                className=" flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-gray-700" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:flex gap-6 sm:gap-24 w-full sm:w-auto">
            {/* Shop Column */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Shop</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    My account
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Cart
                  </Link>
                </li>
              </ul>
            </div>

            {/* Information Column */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Information</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/shipping" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Returns & Refunds
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Cookies Policy
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Frequently asked
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-0 pt-6 border-t border-gray-200 sm:border-t-0">
          <p className="text-sm text-gray-600">© John Lewis plc 2001 - 2024</p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            {/* Language Selector */}
            <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900">
              <span className="text-xl">🇺🇸</span>
              <span>English</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Currency Selector */}
            <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900">
              <span>USD</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
