import { useState } from "react";

export default function ManufacturerContent() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-[#FFF1E8] py-20">
      {/* light orange background */}

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
          Clothing Manufacturers & Garment Exporters in India
        </h2>

        <p className="text-gray-700 leading-relaxed mb-5">
          With years’ experience, Clothify has gained a strong reputation in
          the clothing manufacturing field. We are one of India’s most trusted
          apparel manufacturers. We provide our customers with great quality
          products, the best services, and attractive offers for private label
          clothing.
        </p>

        <p className="text-gray-700 leading-relaxed mb-5">
          The products are of exceptional quality. Every product before
          reaching you goes through a strict quality checking test. In
          addition, we have a quality control team at every stage of
          production that conducts systematic testing and monitors results
          continuously.
        </p>

        <p className="text-gray-700 leading-relaxed mb-5">
          First, our fabric sourcing departments identify the best fabrics
          demanded by clients. After that, our quality checking departments
          inspect and improve fabric quality so that only the best materials
          reach you.
        </p>

        {/* EXPANDABLE CONTENT */}
        {expanded && (
          <>
            <h3 className="text-2xl font-medium text-gray-900 mt-10 mb-4">
              Where Can I Find Clothing Manufacturers in India?
            </h3>

            <p className="text-gray-700 leading-relaxed mb-5">
              We have a modern and spacious infrastructure equipped with the
              latest machinery such as single-needle, double-needle, blind
              stitch, and digital printing systems. We maintain strict hygiene
              and sanitation standards to ensure safe products.
            </p>

            <p className="text-gray-700 leading-relaxed mb-5">
              Clothify garment manufacturers in India produce a wide variety
              of clothing including men’s, women’s, and kids’ wear. We also
              manufacture customized clothing as per fabric, design, and
              pattern requirements provided by clients.
            </p>

            <p className="text-gray-700 leading-relaxed mb-5">
              We accept both small-scale and large-scale orders. Samples are
              provided before bulk production to ensure customer satisfaction.
              We also offer private label clothing where clients can tag their
              own brand names.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mt-10 mb-4">
              What We Offer as Clothing Manufacturers in India
            </h3>

            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Customize Styles</li>
              <li>Customize Printing & Embroidery</li>
              <li>Customize Drying & Hand Work</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-5">
              We manufacture clothing across all categories including
              Sportswear, Gym wear, Party Wear, Beach Wear, Undergarments,
              and high-fashion clothing.
            </p>

            <p className="text-gray-700 leading-relaxed mb-5">
              <strong>Women’s Fashion Clothing:</strong> Ladies Tops, Dresses,
              Skirts, Leggings, Pants, Nightwear, Kaftans, Shorts, etc.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <strong>Men’s Wear & Kidswear:</strong> T-shirts, Shirts, Pants,
              Shorts, Track Suits, Night Suits, Joggers, Jackets, Coats, Jeans,
              etc.
            </p>
          </>
        )}

        {/* TOGGLE BUTTON */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-6 text-orange-600 font-medium hover:underline"
        >
          {expanded ? "Read less" : "Read more"}
        </button>

      </div>
    </section>
  );
}
