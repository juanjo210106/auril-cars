import Image from "next/image";

const portfolioItems = [
  { image: "https://ext.same-assets.com/2955440858/1068453453.jpeg", title: "Long Way Truck", author: "Chris Hemsworth" },
  { image: "https://ext.same-assets.com/2955440858/810150975.jpeg", title: "Long Way Truck", author: "Chris Hemsworth" },
  { image: "https://ext.same-assets.com/2955440858/1750173719.jpeg", title: "Long Way Truck", author: "Chris Hemsworth" },
  { image: "https://ext.same-assets.com/2955440858/846814982.jpeg", title: "Long Way Truck", author: "Chris Hemsworth" },
  { image: "https://ext.same-assets.com/2955440858/4247272972.jpeg", title: "Long Way Truck", author: "Chris Hemsworth" },
  { image: "https://ext.same-assets.com/2955440858/1073951736.jpeg", title: "Long Way Truck", author: "Chris Hemsworth" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Latest Work</h2>
          <p className="text-text-gray mt-8">
            Phasellus imperdiet libero sit amet ante Donec convallis elementum leum
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-3 gap-0">
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-item group relative overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                {/* Overlay */}
                <div className="portfolio-overlay absolute inset-0 bg-primary-dark/80 opacity-0 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    type="button"
                    className="w-12 h-12 bg-accent-red rounded-full flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Info */}
              <div className="bg-white p-4 text-center">
                <h4 className="text-primary-dark font-semibold font-ubuntu">{item.title}</h4>
                <p className="text-text-gray text-xs uppercase tracking-wider mt-1">By {item.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
