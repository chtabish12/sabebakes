"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Order Reminders", href: "#order-reminders" },
  { label: "Order", href: "#order" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2.5 group">
          <div className="relative w-11 h-11 flex-shrink-0 drop-shadow-md group-hover:scale-105 transition-transform duration-200">
            <Image
              src="/logo.svg"
              alt="Sabe Bakes logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-playfair font-bold text-xl text-brown">
            Sabe <span className="text-caramel">Bakes</span>
          </span>
        </Link>

        {/* Hamburger Menu Button - always visible */}
        <button
          className="p-2 rounded-md text-brown hover:text-maroon transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="bg-cream border-t border-cream-dark shadow-lg">
          <ul className="flex flex-col py-4 px-6 gap-2 max-w-7xl mx-auto">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-lato text-base font-semibold text-brown hover:text-maroon transition-colors block py-2 border-b border-cream-dark"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#order"
                className="btn-primary text-center w-full block"
                onClick={() => setIsOpen(false)}
              >
                Order Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
