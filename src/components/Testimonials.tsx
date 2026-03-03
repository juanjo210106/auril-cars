"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    avatar: "https://ext.same-assets.com/2955440858/2879769413.jpeg",
    name: "James Bond",
    role: "Happy Client",
    text: "You wanna be where you can see our troubles are all the same. You wanna be where everybody knows Your name. Just two good ol' boys Wouldn't change if they could.",
  },
  {
    avatar: "https://ext.same-assets.com/2955440858/1295562376.jpeg",
    name: "James Bond",
    role: "Happy Client",
    text: "You wanna be where you can see our troubles are all the same. You wanna be where everybody knows Your name. Just two good ol' boys Wouldn't change if they could.",
  },
  {
    avatar: "https://ext.same-assets.com/2955440858/1081766098.jpeg",
    name: "James Bond",
    role: "Happy Client",
    text: "You wanna be where you can see our troubles are all the same. You wanna be where everybody knows Your name. Just two good ol' boys Wouldn't change if they could.",
  },
];

const avatars = [
  "https://ext.same-assets.com/2955440858/2879769413.jpeg",
  "https://ext.same-assets.com/2955440858/1295562376.jpeg",
  "https://ext.same-assets.com/2955440858/1081766098.jpeg",
  "https://ext.same-assets.com/2955440858/269950379.jpeg",
  "https://ext.same-assets.com/2955440858/3824062246.jpeg",
  "https://ext.same-assets.com/2955440858/2879769413.jpeg",
];

const clientLogos = [
  "https://ext.same-assets.com/2955440858/1212414305.png",
  "https://ext.same-assets.com/2955440858/3176250583.png",
  "https://ext.same-assets.com/2955440858/353916773.png",
  "https://ext.same-assets.com/2955440858/3700339056.png",
  "https://ext.same-assets.com/2955440858/546484537.png",
  "https://ext.same-assets.com/2955440858/2352712049.png",
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Testimonial */}
          <div>
            <div className="text-center lg:text-left mb-8">
              <h2 className="section-title">Testimonial</h2>
              <p className="text-text-gray mt-8">
                Phasellus imperdiet libero sit amet ante Donec convallis
              </p>
            </div>

            {/* Avatars Row */}
            <div className="flex justify-center lg:justify-start gap-2 mb-8">
              {avatars.map((avatar, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentTestimonial(index % testimonials.length)}
                  className={`w-14 h-14 rounded-full overflow-hidden transition-all ${
                    index % testimonials.length === currentTestimonial ? "ring-2 ring-accent-red" : ""
                  }`}
                >
                  <Image
                    src={avatar}
                    alt="Client"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Testimonial Content */}
            <div className="relative">
              <div className="text-6xl text-accent-red/20 font-serif absolute -top-4 left-0">"</div>
              <div className="pl-8">
                <h4 className="text-primary-dark font-bold font-ubuntu text-lg uppercase mb-1">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-accent-red text-sm mb-4">
                  {testimonials[currentTestimonial].role}
                </p>
                <p className="text-text-gray italic leading-relaxed">
                  {testimonials[currentTestimonial].text}
                </p>
              </div>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-6 pl-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-accent-red" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Happy Clients */}
          <div>
            <div className="text-center lg:text-left mb-8">
              <h2 className="section-title">Our Happy Clients</h2>
              <p className="text-text-gray mt-8">
                Phasellus imperdiet libero sit amet ante Donec convallis
              </p>
            </div>

            {/* Client Logos Grid */}
            <div className="grid grid-cols-3 gap-4">
              {clientLogos.map((logo, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 flex items-center justify-center hover:shadow-lg transition-shadow"
                >
                  <Image
                    src={logo}
                    alt="Client Logo"
                    width={120}
                    height={80}
                    className="opacity-60 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
