import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://www.wings2fashion.com/upload_indexslide/garment-manufacturer-india-69282631bd137.jpg?v=1",
  "https://www.wings2fashion.com/upload_indexslide/custom-hoodie-manufacturer-692827641fe4b.png?v=1",
  "https://images.livemint.com/img/2022/02/11/1600x900/INDIA-UNEMPLOYMENT-TEXTILES-SUPPLIES-1_1644554787632_1644554808053.JPG",
  "https://marketplace.canva.com/EAFVHstxnwk/1/0/800w/canva-beige-aesthetic-exclusive-fashion-wear-collection-clothing-banner-yv-HRWs1aMc.jpg",
  "https://assets-static.invideo.io/images/origin/Fashion_Ad_c7b51b5395.JPG"
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {/* Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Clothify banner"
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Premium Clothing Manufacturing
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-200">
          Trusted apparel solutions for brands, startups, and fashion businesses.
        </p>
        <button className="mt-6 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-semibold">
          Explore Clothify
        </button>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-green-500" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
