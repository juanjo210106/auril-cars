"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  "Wheel Alignment",
  "Brake Repair Specialists",
  "Engine Overhaul",
  "Complete Safety Analysis",
  "Suspension Repair",
  "Car Cleaning And Washing",
  "Fuel System Service",
  "Engine Installation",
  "Car Sell And Buying",
  "Suspension Repair",
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-primary-dark pt-16 pb-8"
      style={{
        backgroundImage: "url('https://ext.same-assets.com/2955440858/145259143.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - Logo & About */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="https://ext.same-assets.com/2955440858/110989789.png"
                alt="Auril Cars Logo"
                width={60}
                height={60}
              />
              <div>
                <span className="text-xl font-bold font-ubuntu">
                  <span className="text-white">AURIL</span>
                  <span className="text-accent-red">CARS</span>
                </span>
                <p className="text-xs text-gray-400 tracking-widest uppercase">Repairs & Services</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Aoluptas sit aspernatur aut odit aut fugit, sed elits quias consequuntur magni dolores eos qui ratione volust luptatem sequi nesciunt..
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Aoluptas sit aspernatur aut odit aut fugit, sed elits quias consequuntur magni dolores
            </p>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="text-white font-bold font-ubuntu uppercase tracking-wide mb-6">
              Service provided
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-gray-400 text-sm hover:text-accent-red transition-colors flex items-center gap-2"
                  >
                    <svg className="w-3 h-3 text-accent-red" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Get Free Quote */}
          <div>
            <h4 className="text-white font-bold font-ubuntu uppercase tracking-wide mb-6">
              Get Free Quote
            </h4>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 bg-transparent border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-accent-red"
              />
              <input
                type="tel"
                placeholder="Phone No"
                className="w-full px-4 py-3 bg-transparent border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-accent-red"
              />
              <textarea
                placeholder="Messages"
                rows={3}
                className="w-full px-4 py-3 bg-transparent border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-accent-red resize-none"
              />
              <button
                type="button"
                className="inline-flex items-center px-6 py-3 bg-primary-dark border border-gray-600 text-white font-semibold uppercase tracking-wider text-sm hover:bg-accent-red hover:border-accent-red transition-colors"
              >
                Send Now
                <span className="ml-3 w-8 h-8 bg-accent-red flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-8 border-t border-gray-700">
          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 border border-gray-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-accent-red" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Call Us Now</p>
              <p className="text-gray-400 text-sm">+ ( 124 ) 45 78 678</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 border border-gray-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-accent-red" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Email us</p>
              <p className="text-gray-400 text-sm">info@mail.com</p>
            </div>
          </div>

          {/* Fax */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 border border-gray-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                <polyline points="12,6 12,12 16,14" strokeWidth="2"/>
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Fax to us</p>
              <p className="text-gray-400 text-sm">+(01) 848-658-789</p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 border border-gray-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2"/>
                <line x1="8" y1="21" x2="16" y2="21" strokeWidth="2"/>
                <line x1="12" y1="17" x2="12" y2="21" strokeWidth="2"/>
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Opening Hours</p>
              <p className="text-gray-400 text-sm">Mon - Sat : 9am to 7pm</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            Copyrights © 2015 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
