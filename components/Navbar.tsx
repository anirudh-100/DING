"use client";
import Link from "next/link";
import { useState } from "react";
import { FaCartArrowDown, FaHome, FaRegHeart, FaLock } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { IoMdLogIn } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white px-4 py-3 fixed top-0 left-0 w-full shadow-lg z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Brand Logo */}
        <Link href="/" className="text-2xl font-bold">
          DING
        </Link>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        {/* Desktop Navigation Links */}
        <ul className={`lg:flex gap-6 hidden ${isOpen ? "block" : "hidden"}`}>
          <li>
            <Link href="/" className="hover:text-gray-300 transition flex items-center gap-2">
              <FaHome />
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-gray-300 transition flex items-center gap-2">
              <GiShoppingBag />
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/wishlist"
              className="hover:text-gray-300 transition flex items-center gap-2"
            >
              <FaRegHeart />
              Wishlist
            </Link>
          </li>
          <li>
            <Link href="/cart" className="hover:text-gray-300 transition flex items-center gap-2">
              <FaCartArrowDown />
              Cart
            </Link>
          </li>
        </ul>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Link
            href="/login"
            className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-300 transition flex items-center gap-2"
          >
            <IoMdLogIn />
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition flex items-center gap-2"
          >
            <FaLock />
            Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile Menu Links */}
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"} bg-black text-white py-2`}>
        <ul className="flex flex-col items-center">
          <li>
            <Link
              href="/"
              className="py-2 hover:text-gray-300 transition flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <FaHome />
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className="py-2 hover:text-gray-300 transition flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <GiShoppingBag />
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/wishlist"
              className="py-2 hover:text-gray-300 transition flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <FaRegHeart />
              Wishlist
            </Link>
          </li>
          <li>
            <Link
              href="/cart"
              className="py-2 hover:text-gray-300 transition flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <FaCartArrowDown />
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
