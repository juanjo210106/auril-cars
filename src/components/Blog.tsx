import Image from "next/image";

const blogPosts = [
  {
    image: "https://ext.same-assets.com/2955440858/1980538110.jpeg",
    date: { day: "21", month: "Nov" },
    likes: 10,
    comments: 20,
    author: "Will Smith",
    title: "Suspension Repair",
    excerpt: "Sed ut perspiciatis unde natus error voluptatem accusantium doloremque explicabo...",
  },
  {
    image: "https://ext.same-assets.com/2955440858/1788927296.jpeg",
    date: { day: "21", month: "Nov" },
    likes: 10,
    comments: 20,
    author: "Will Smith",
    title: "Suspension Repair",
    excerpt: "Sed ut perspiciatis unde natus error voluptatem accusantium doloremque explicabo...",
  },
  {
    image: "https://ext.same-assets.com/2955440858/3816200221.jpeg",
    date: { day: "21", month: "Nov" },
    likes: 10,
    comments: 20,
    author: "Will Smith",
    title: "Suspension Repair",
    excerpt: "Sed ut perspiciatis unde natus error voluptatem accusantium doloremque explicabo...",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Latest News</h2>
          <p className="text-text-gray mt-8">
            Phasellus imperdiet libero sit amet ante Donec convallis elementum leum
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white shadow-lg overflow-hidden group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                <div className="flex items-center gap-4 text-text-gray text-sm">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    {post.likes} Likes
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    {post.comments} Comments
                  </span>
                </div>
                <div className="bg-accent-red text-white px-3 py-2 text-center">
                  <span className="block text-lg font-bold leading-none">{post.date.day}</span>
                  <span className="text-xs uppercase">{post.date.month}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-accent-red text-sm mb-2">By - {post.author}</p>
                <h3 className="text-primary-dark font-bold font-ubuntu text-lg mb-3 uppercase">
                  {post.title}
                </h3>
                <p className="text-text-gray text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <button
                  type="button"
                  className="inline-flex items-center px-5 py-2 bg-primary-dark text-white font-semibold uppercase tracking-wider text-xs hover:bg-accent-red transition-colors"
                >
                  Read More
                  <span className="ml-2 w-6 h-6 bg-accent-red flex items-center justify-center">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
