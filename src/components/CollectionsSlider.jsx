import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CollectionsSlider() {
  const products = [
    {
      title: "Round Neck Cotton T-Shirt",
      img: "https://i.imgur.com/9QO6G8F.png",
      rating: 4.5,
    },
    {
      title: "Knee length flirty skirt for Womens",
      img: "https://i.imgur.com/Xd8QpZx.png",
      rating: 4.5,
    },
    {
      title: "Short Sleeve Heart Neck Top with Smocking",
      img: "https://i.imgur.com/0nR3fTg.png",
      rating: 4.5,
    },
    {
      title: "Casual Digital Printed Floor Length Dress",
      img: "https://i.imgur.com/3GZ8TnM.png",
      rating: 4.5,
    },
  ];

  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex(index === 0 ? products.length - 1 : index - 1);
  };

  const next = () => {
    setIndex((index + 1) % products.length);
  };

  return (
    <section className="bg-[#EAF6F0] py-20">
      {/* light green background */}

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            SEE OUR COLLECTIONS
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto my-4 rounded-full" />
          <p className="text-gray-600">
            From luxurious fabrics to modern silhouettes, discover apparel
            designs that define quality and style.
          </p>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg"
        >
          <ChevronRight />
        </button>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-64 object-contain p-6"
                />

                {/* Badges */}
                <span className="absolute top-4 right-4 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                  sale
                </span>
                <span className="absolute top-12 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                  New
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-gray-800 font-medium mb-3">
                  {p.title}
                </h3>

                <div className="flex items-center justify-between">
                  <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-full">
                    View Detail
                  </button>

                  <div className="text-sm text-gray-600">
                    ⭐⭐⭐⭐⭐ <span>{p.rating}</span>
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
