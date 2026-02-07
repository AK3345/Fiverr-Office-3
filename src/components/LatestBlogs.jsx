export default function LatestBlogs() {
  const blogs = [
    {
      img: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
      date: "February 6, 2026",
      title: "Top 10 Garment Manufacturers in Turkey: A Complete Industry Guide",
      desc: "Turkey has become one of the most trusted global hubs for apparel production, serving fashion...",
    },
    {
      img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      date: "February 5, 2026",
      title: "Top 10 Vintage Wholesale Suppliers for Quality and Timeless Style",
      desc: "Vintage fashion has evolved from a niche interest into a global movement. Today, retailers...",
    },
    {
      img: "https://images.unsplash.com/photo-1520974735194-6cbbf4fdf2c6",
      date: "February 4, 2026",
      title: "Top 10 Clothing Manufacturers in India in 2026",
      desc: "India continues to be one of the most influential apparel manufacturing hubs in the world...",
    },
  ];

  return (
    <section className="bg-[#EAF6F0] py-20">
      {/* light green background */}

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            LATEST BLOG & ARTICLES
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto my-4 rounded-full" />
          <p className="text-gray-700">
            Discover fashion insights, manufacturing trends, and expert tips.
            Stay informed about apparel design, sustainability, and brand growth.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              {/* Image */}
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-green-600 italic mb-2">
                  Posted {blog.date} by Clothify
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm mb-6">
                  {blog.desc}
                </p>

                <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-6 py-2 rounded-full">
                  Read more...
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
