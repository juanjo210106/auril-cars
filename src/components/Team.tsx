import Image from "next/image";

const teamMembers = [
  {
    image: "https://ext.same-assets.com/2955440858/149115081.jpeg",
    name: "Stevan Smith",
    role: "Engine Specialist",
    email: "Support@Info.Com",
    phone: "+(800) 23-145-451",
  },
  {
    image: "https://ext.same-assets.com/2955440858/872014966.jpeg",
    name: "Paul Walker",
    role: "Engine Specialist",
    email: "Support@Info.Com",
    phone: "+(800) 23-145-451",
  },
  {
    image: "https://ext.same-assets.com/2955440858/3674774454.jpeg",
    name: "Luck Walker",
    role: "Engine Specialist",
    email: "Support@Info.Com",
    phone: "+(800) 23-145-451",
  },
  {
    image: "https://ext.same-assets.com/2955440858/684318091.jpeg",
    name: "Brett Connor",
    role: "Engine Specialist",
    email: "Support@Info.Com",
    phone: "+(800) 23-145-451",
  },
];

export default function Team() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Team Members</h2>
          <p className="text-text-gray mt-8">
            Phasellus imperdiet libero sit amet ante Donec convallis elementum leum
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card relative overflow-hidden group">
              <div className="relative h-72">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
                {/* Name Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-primary-dark/90 p-4">
                  <h4 className="text-white font-bold font-ubuntu uppercase tracking-wide text-sm">
                    {member.name}
                  </h4>
                </div>
                {/* Hover Overlay */}
                <div className="team-overlay absolute inset-0 bg-accent-red/90 opacity-0 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <h4 className="text-white font-bold font-ubuntu uppercase tracking-wide mb-2">
                    {member.name}
                  </h4>
                  <p className="text-white/80 text-sm mb-2">{member.role}</p>
                  <p className="text-white/80 text-sm mb-1">{member.email}</p>
                  <p className="text-white/80 text-sm mb-4">{member.phone}</p>
                  {/* Social Icons */}
                  <div className="flex gap-3">
                    {['facebook', 'twitter', 'linkedin'].map((social) => (
                      <button
                        key={social}
                        type="button"
                        className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          {social === 'facebook' && <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>}
                          {social === 'twitter' && <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>}
                          {social === 'linkedin' && <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"/>}
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
