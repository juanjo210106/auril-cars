"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = [
  {
    id: "luxury",
    icon: "https://ext.same-assets.com/2955440858/682201569.png",
    label: "Luxury Car",
    color: "bg-accent-red",
  },
  {
    id: "trucks",
    icon: "https://ext.same-assets.com/2955440858/1494346880.png",
    label: "Trucks Services",
    color: "bg-primary-dark",
  },
  {
    id: "sports",
    icon: "https://ext.same-assets.com/2955440858/3193976401.png",
    label: "Sports Car",
    color: "bg-primary-dark",
  },
];

const servicesList = [
  { icon: "https://ext.same-assets.com/2955440858/149664672.png", text: "Complete Computer Diagnostics" },
  { icon: "https://ext.same-assets.com/2955440858/1961825460.png", text: "Complete Safety Analysis" },
  { icon: "https://ext.same-assets.com/2955440858/2525118223.png", text: "Fuel System Services" },
  { icon: "https://ext.same-assets.com/2955440858/3027365017.png", text: "Steering and Suspensions" },
  { icon: "https://ext.same-assets.com/2955440858/3031404015.png", text: "Brake Repair Specialists" },
  { icon: "https://ext.same-assets.com/2955440858/3117143453.png", text: "Mufflers and Exhaust Systems" },
];

export default function WheelsSection() {
  const [activeTab, setActiveTab] = useState("luxury");

  return (
    <section className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Wheels We Handle</h2>
          <p className="text-text-gray mt-8">
            Phasellus imperdiet libero sit amet ante Donec convallis elementum leum
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left Side - Image and Tabs */}
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-1/2 relative h-64 sm:h-96">
              <Image
                src="https://ext.same-assets.com/2955440858/1978869830.jpeg"
                alt="Mechanic"
                fill
                className="object-cover"
              />
            </div>
            <div className="sm:w-1/2 flex flex-row sm:flex-col">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex flex-col items-center justify-center gap-3 transition-colors ${
                    activeTab === tab.id ? "bg-accent-red" : "bg-primary-dark hover:bg-primary-dark/80"
                  }`}
                >
                  <Image
                    src={tab.icon}
                    alt={tab.label}
                    width={60}
                    height={40}
                    className="brightness-0 invert"
                  />
                  <span className="text-white text-sm font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="bg-white p-8 lg:p-12">
            <p className="text-text-gray mb-2">What We Offer</p>
            <h3 className="text-2xl font-bold font-ubuntu text-accent-red mb-6">
              BEST SERVICES WE CAN PROVIDE
            </h3>
            <p className="text-text-gray mb-8 leading-relaxed">
              Suspendisse nec magna vitae est scelerisque blandit. Nam tempus vestibulums risus quis congue. Vestibulum fermentum sollicitudin posuere.
            </p>

            {/* Services List */}
            <div className="space-y-4 mb-8">
              {servicesList.map((service, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Image
                    src={service.icon}
                    alt={service.text}
                    width={40}
                    height={40}
                    className="opacity-60"
                  />
                  <span className="text-text-gray">{service.text}</span>
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
    </section>
  );
}
