"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    image: "https://ext.same-assets.com/2955440858/1115682258.jpeg",
    smallImages: [
      "https://ext.same-assets.com/2955440858/2580631513.jpeg",
      "https://ext.same-assets.com/2955440858/1494197362.jpeg",
      "https://ext.same-assets.com/2955440858/2609712868.jpeg",
    ],
  },
  {
    image: "https://ext.same-assets.com/2955440858/748400048.jpeg",
    smallImages: [
      "https://ext.same-assets.com/2955440858/2580631513.jpeg",
      "https://ext.same-assets.com/2955440858/1494197362.jpeg",
      "https://ext.same-assets.com/2955440858/2609712868.jpeg",
    ],
  },
  {
    image: "https://ext.same-assets.com/2955440858/3543845299.jpeg",
    smallImages: [
      "https://ext.same-assets.com/2955440858/2580631513.jpeg",
      "https://ext.same-assets.com/2955440858/1494197362.jpeg",
      "https://ext.same-assets.com/2955440858/2609712868.jpeg",
    ],
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[600px] lg:h-[650px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt="Hero Background"
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-4 lg:px-8 flex items-center">
            <div className={`max-w-2xl ${index === currentSlide ? 'animate-fade-in' : ''}`}>
              <p className="text-white text-lg mb-2 tracking-wider uppercase font-medium">
                Welcome To Auril
              </p>
              <h1 className="text-white text-4xl lg:text-6xl font-bold font-ubuntu mb-6 leading-tight">
                CAR REPAIR & SERVICES
              </h1>
              <p className="text-white/90 text-base lg:text-lg mb-4 leading-relaxed">
                The Love Boat promises something for everyone. Now the world don't move to the beat of just one drum.
              </p>
              <p className="text-white/90 text-base lg:text-lg mb-8 leading-relaxed">
                What might be right for you may not be right for some. Just two good ol' boys Never harm.
              </p>

              {/* Small Images */}
              <div className="flex gap-1 mb-8">
                {slide.smallImages.map((img, idx) => (
                  <div key={idx} className="w-28 h-20 relative overflow-hidden">
                    <Image
                      src={img}
                      alt="Service"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="inline-flex items-center px-6 py-3 bg-primary-dark text-white font-semibold uppercase tracking-wider text-sm hover:bg-accent-red transition-colors"
              >
                Read More
                <span className="ml-3 w-8 h-8 bg-accent-red flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-accent-red" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
