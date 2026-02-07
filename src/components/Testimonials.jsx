import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      initials: "SC",
      title: "Best Women's Wear Manufacturer",
      message:
        "Clothify delivered quality western dresses and tops exactly as promised.",
      name: "Sarah Conor",
      role: "Director",
    },
    {
      initials: "JC",
      title: "Great for Custom Clothing",
      message:
        "Excellent communication and quick responses from their team.",
      name: "John Can",
      role: "Manager",
    },
    {
      initials: "TC",
      title: "Outstanding Garment Manufacturer",
      message:
        "High-quality T-shirts with perfect stitching and timely delivery.",
      name: "Tom Conor",
      role: "Buyer",
    },
    {
      initials: "JC",
      title: "Perfect for Startups",
      message:
        "We ordered sportswear samples; the quality and service were impressive.",
      name: "Jarry Conor",
      role: "Buyer",
    },
  ];

  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const prev = () =>
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  const next = () =>
    setIndex((index + 1) % testimonials.length);

  return (
    <section className="bg-[#EAF6F0] py-24">
      {/* light green background */}

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-green-700">
            WHAT CLIENTS SAY
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto my-4 rounded-full" />
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our clients love us for our quality, creativity, and commitment to
            excellence. See why global fashion brands choose Clothify.
          </p>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full"
        >
          <ChevronRight />
        </button>

        {/* Testimonial Card */}
        <div className="bg-white rounded-3xl shadow-lg p-12 flex flex-col md:flex-row items-center gap-10">

          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-36 h-36 rounded-full bg-green-600 flex items-center justify-center text-white text-4xl font-bold">
              {t.initials}
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="text-yellow-400 mb-3">
              ⭐ ⭐ ⭐ ⭐ ⭐
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {t.title}
            </h3>

            <p className="text-gray-600 mb-6 max-w-xl">
              “{t.message}”
            </p>

            <p className="text-green-700 font-semibold">
              {t.name}
              <span className="text-gray-500 font-normal">
                {" "} / {t.role}
              </span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
