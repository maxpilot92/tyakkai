"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Facebook, Instagram, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full text-black bg-white shadow-md mx-0">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="http://tyakkai.com/wp-content/uploads/2024/09/tyakkai-logo.png"
            height={150}
            width={150}
            alt="Tyakkai Logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className=" hover:text-[#ffc700] transition-colors">
            Home
          </Link>
          <div className="relative group">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center  hover:text-[#ffc700] transition-colors"
            >
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div
              className={cn(
                "absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black border border-gray-800 overflow-hidden transition-all duration-200 ease-in-out",
                isServicesOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              )}
            >
              <div className="py-1">
                <Link
                  href="/services/digital-marketing"
                  className="block px-4 py-2 text-sm  hover:bg-gray-800"
                >
                  Digital Marketing
                </Link>
                <Link
                  href="/services/web-development"
                  className="block px-4 py-2 text-sm  hover:bg-gray-800"
                >
                  Web Development
                </Link>
                <Link
                  href="/services/branding"
                  className="block px-4 py-2 text-sm  hover:bg-gray-800"
                >
                  Branding
                </Link>
              </div>
            </div>
          </div>
          <Link
            href="/portfolio"
            className=" hover:text-[#ffc700] transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className=" hover:text-[#ffc700] transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className=" hover:text-[#ffc700] transition-colors"
          >
            Contact Us
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="https://facebook.com"
            className=" hover:text-[#ffc700] transition-colors"
          >
            <Facebook className="h-5 w-5" />
          </Link>
          <Link
            href="https://instagram.com"
            className=" hover:text-[#ffc700] transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </Link>
          <Link
            href="https://twitter.com"
            className=" hover:text-[#ffc700] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-black z-40 transition-transform duration-300 ease-in-out transform",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <Link
            href="/"
            className="py-4 text-xl  border-b border-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <div>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full py-4 text-xl  border-b border-gray-800 flex justify-between items-center"
            >
              Services{" "}
              <ChevronDown
                className={cn(
                  "h-5 w-5 transition-transform",
                  isServicesOpen && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "pl-4 overflow-hidden transition-all",
                isServicesOpen ? "max-h-48" : "max-h-0"
              )}
            >
              <Link
                href="/services/digital-marketing"
                className="block py-3 "
                onClick={() => setIsMenuOpen(false)}
              >
                Digital Marketing
              </Link>
              <Link
                href="/services/web-development"
                className="block py-3 "
                onClick={() => setIsMenuOpen(false)}
              >
                Web Development
              </Link>
              <Link
                href="/services/branding"
                className="block py-3 "
                onClick={() => setIsMenuOpen(false)}
              >
                Branding
              </Link>
            </div>
          </div>
          <Link
            href="/portfolio"
            className="py-4 text-xl  border-b border-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className="py-4 text-xl  border-b border-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="py-4 text-xl  border-b border-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>

          <div className="flex space-x-6 mt-8">
            <Link href="https://facebook.com" className=" hover:text-[#ffc700]">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link
              href="https://instagram.com"
              className=" hover:text-[#ffc700]"
            >
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="https://twitter.com" className=" hover:text-[#ffc700]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
