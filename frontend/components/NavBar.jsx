"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <Link href="/" className="cursor-pointer">
          <img
            src="/images/logovaracool.png"
            alt="logo"
            className="h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>

        
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/products" className="hover:text-blue-600">Products</Link>
          <Link href="/cart" className="hover:text-blue-600">Cart</Link>
          <Link href="/login" className="hover:text-blue-600">Login</Link>
        </div>

        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 text-gray-700 font-medium">
          <Link href="/" className="block hover:text-blue-600">Home</Link>
          <Link href="/products" className="block hover:text-blue-600">Products</Link>
          <Link href="/cart" className="block hover:text-blue-600">Cart</Link>
          <Link href="/login" className="block hover:text-blue-600">Login</Link>
        </div>
      )}
    </nav>
  );
}
