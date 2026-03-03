"use client";

import { useState } from "react";
import Image from "next/image";

const products = [
  { image: "https://ext.same-assets.com/2955440858/3225494746.jpeg", name: "Car Accessories", price: 1500 },
  { image: "https://ext.same-assets.com/2955440858/1453065873.jpeg", name: "Car Accessories", price: 1500 },
  { image: "https://ext.same-assets.com/2955440858/185064032.jpeg", name: "Car Accessories", price: 1500 },
  { image: "https://ext.same-assets.com/2955440858/193763463.jpeg", name: "Car Accessories", price: 1500 },
];

export default function Products() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <section className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Our Products</h2>
          <p className="text-text-gray mt-8">
            Phasellus imperdiet libero sit amet ante Donec convallis elementum leum
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product, index) => (
            <div key={index} className="bg-white shadow-lg overflow-hidden group">
              {/* Image */}
              <div className="relative h-64 bg-gray-50 flex items-center justify-center p-8">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
                {/* Add to Cart Overlay */}
                <div className="absolute inset-0 bg-primary-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    type="button"
                    className="px-6 py-3 bg-accent-red text-white text-sm font-semibold uppercase tracking-wider hover:bg-red-600 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-4 text-center border-t-4 border-accent-red">
                <h4 className="text-primary-dark font-semibold font-ubuntu mb-1">{product.name}</h4>
                <p className="text-accent-red font-bold">$ {product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1].map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => setCurrentPage(page)}
              className={`w-3 h-3 rounded-full transition-colors ${
                page === currentPage ? "bg-accent-red" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
