"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "#", active: true },
  { label: "About", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pages", href: "#", dropdown: true },
  { label: "Blog", href: "#blog" },
  { label: "Contact us", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-white py-4 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://ext.same-assets.com/2955440858/2137315808.png"
              alt="Auril Cars Logo"
              width={60}
              height={60}
              className="w-14 h-14"
            />
            <div>
              <span className="text-xl font-bold font-ubuntu">
                <span className="text-primary-dark">AURIL</span>
                <span className="text-accent-red">CARS</span>
              </span>
              <p className="text-xs text-text-gray tracking-widest uppercase">Repairs & Services</p>
            </div>
          </Link>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-accent-red" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-text-gray">Call Us Now</p>
                <p className="text-sm text-primary-dark font-semibold">+ ( 124 ) 45 78 678</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-accent-red" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-text-gray">Email us</p>
                <p className="text-sm text-primary-dark font-semibold">info@mail.com</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                  <polyline points="12,6 12,12 16,14" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-text-gray">Opening Hours</p>
                <p className="text-sm text-primary-dark font-semibold">Mon - Sat : 9am to 7pm</p>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            <ul className={`${mobileMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row absolute lg:relative top-full left-0 right-0 lg:top-auto bg-primary-dark lg:bg-transparent z-50`}>
              {navItems.map((item) => (
                <li key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className={`block px-5 py-4 text-sm font-medium uppercase tracking-wider transition-colors ${
                      item.active ? "text-accent-red bg-accent-red/10" : "text-white hover:text-accent-red"
                    }`}
                  >
                    {item.label}
                    {item.dropdown && (
                      <svg className="inline-block w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Add to Cart Button */}
            <Link
              href="#"
              className="hidden lg:flex items-center gap-2 px-6 py-4 bg-accent-red text-white text-sm font-semibold uppercase tracking-wider hover:bg-red-600 transition-colors"
            >
              Add to Cart
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
