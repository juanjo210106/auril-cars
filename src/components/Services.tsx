import Image from "next/image";

const services = [
  {
    icon: "https://ext.same-assets.com/2955440858/1121446196.png",
    image: "https://ext.same-assets.com/2955440858/541254622.jpeg",
    title: "Wheel Alignments",
    description: "Sed ut perspiciatis unde natus error voluptatem accusantium doloremque laudantium remder lits aperiam eaque ipsa inventore explicabo...",
  },
  {
    icon: "https://ext.same-assets.com/2955440858/3942101388.png",
    image: "https://ext.same-assets.com/2955440858/1328138568.jpeg",
    title: "Suspension Repair",
    description: "Sed ut perspiciatis unde natus error voluptatem accusantium doloremque laudantium remder lits aperiam eaque ipsa inventore explicabo...",
  },
  {
    icon: "https://ext.same-assets.com/2955440858/1288605852.png",
    image: "https://ext.same-assets.com/2955440858/1750490265.jpeg",
    title: "Engine Overhaul",
    description: "Sed ut perspiciatis unde natus error voluptatem accusantium doloremque laudantium remder lits aperiam eaque ipsa inventore explicabo...",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <p className="text-text-gray mt-8">
            Phasellus imperdiet libero sit amet ante Donec convallis elementum leum
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              {/* Image with Icon */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Icon */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-accent-red flex items-center justify-center">
                  <Image
                    src={service.icon}
                    alt={`${service.title} icon`}
                    width={40}
                    height={40}
                    className="brightness-0 invert"
                  />
                </div>
              </div>

              {/* Title Bar */}
              <div className="service-card-title">
                <h3 className="text-sm uppercase tracking-wider">{service.title}</h3>
              </div>

              {/* Description */}
              <div className="p-6">
                <p className="text-text-gray text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Arrow Button */}
              <div className="flex justify-end p-4 pt-0">
                <button
                  type="button"
                  className="w-10 h-10 bg-primary-dark flex items-center justify-center hover:bg-accent-red transition-colors"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
