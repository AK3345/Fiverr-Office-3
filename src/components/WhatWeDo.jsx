import {
  Scissors,
  ShieldCheck,
  Printer,
  Truck,
  Ruler,
  Tag,
  Shirt,
  Layers,
} from "lucide-react";

export default function WhatWeDo() {
  const services = [
    {
      title: "Sampling",
      desc: "We provide sampling before bulk production order.",
      icon: <Shirt className="text-green-600" />,
    },
    {
      title: "Private Labeling",
      desc: "Attach private label with your brand name on products.",
      icon: <Tag className="text-green-600" />,
    },
    {
      title: "Pattern Making",
      desc: "Pattern making as per product design and tech pack.",
      icon: <Ruler className="text-green-600" />,
    },
    {
      title: "Fabric Sourcing",
      desc: "Sourcing of fabric for samples and production.",
      icon: <Layers className="text-green-600" />,
    },
    {
      title: "Fabric Cutting",
      desc: "Fabric cutting process as per ratio and quantity.",
      icon: <Scissors className="text-green-600" />,
    },
    {
      title: "Quality Checking",
      desc: "Dedicated QC team to ensure premium quality.",
      icon: <ShieldCheck className="text-green-600" />,
    },
    {
      title: "Printing",
      desc: "Custom printing available for designs and patterns.",
      icon: <Printer className="text-green-600" />,
    },
    {
      title: "Shipping",
      desc: "We ship products by air and sea worldwide.",
      icon: <Truck className="text-green-600" />,
    },
  ];

  return (
    <section className="bg-green-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left Text */}
          <div>
            <p className="text-sm uppercase tracking-widest text-green-700 mb-3">
              What We Do
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
              All-in-One Solutions to Build Your <br />
              <span className="text-green-600">Unique Fashion Brand</span>
            </h2>

            <p className="mt-5 text-gray-600 max-w-xl">
              Clothify provides everything you need to build your fashion line,
              business wear brand, or accessories label — with a unique touch
              that sets you apart.
            </p>
          </div>

          {/* Right Images */}
          <div className="flex gap-6 justify-center">
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
              alt=""
              className="w-56 h-64 object-cover rounded-3xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1520974735194-6cbbf4fdf2c6"
              alt=""
              className="w-56 h-64 object-cover rounded-3xl shadow-lg"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-3xl p-6 hover:shadow-xl transition"
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow mb-5">
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
