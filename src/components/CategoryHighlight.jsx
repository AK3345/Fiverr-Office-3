export default function CategoryHighlight() {
  const categories = [
    "Kids Wear",
    "Western Wear",
    "Custom Clothing",
    "Casual Wear",
    "Formal Wear",
    "Sports Wear",
  ];

  return (
    <section className="bg-green-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Apparel Categories <br />
            <span className="text-green-600">We Manufacture</span>
          </h2>

          <p className="mt-5 text-gray-600 max-w-lg">
            Clothify specializes in a wide range of apparel categories,
            delivering consistent quality, scalable production, and
            export-ready garments for global brands.
          </p>

          <div className="mt-8 h-1 w-20 bg-green-600 rounded-full" />
        </div>

        {/* RIGHT CATEGORY BLOCKS */}
        <div className="grid grid-cols-2 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl px-6 py-5 shadow-sm hover:shadow-md transition border-l-4 border-green-500"
            >
              <p className="text-lg font-medium text-gray-800">
                {cat}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Premium manufacturing & export quality
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
