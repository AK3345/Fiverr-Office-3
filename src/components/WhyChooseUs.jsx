export default function WhyChooseUs() {
  return (
    <section className="bg-green-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            WHY GLOBAL BRANDS CHOOSE{" "}
            <span className="text-green-600">CLOTHIFY?</span>
          </h2>

          <div className="w-20 h-1 bg-green-600 mx-auto my-4 rounded-full"></div>

          <p className="text-gray-600 mt-4">
            Our use of modern technology, trained artisans, advanced systems,
            and multi-stage quality control makes us a trusted name in apparel
            manufacturing.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

          {/* Card 1 */}
          <div className="bg-white rounded-3xl shadow-sm hover:shadow-lg transition p-6">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
              alt="Production"
              className="rounded-2xl mb-6 w-full h-56 object-cover"
            />

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Production Capacity
            </h3>

            <ul className="text-gray-600 space-y-2 list-disc list-inside">
              <li>500,000+ garments annually</li>
              <li>200+ skilled workers</li>
              <li>24/7 production capability</li>
              <li>Flexible MOQ (small to bulk)</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl shadow-sm hover:shadow-lg transition p-6">
            <img
              src="https://images.unsplash.com/photo-1616627458962-b7a1d22c79d4"
              alt="Quality"
              className="rounded-2xl mb-6 w-full h-56 object-cover"
            />

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Quality Assurance
            </h3>

            <ul className="text-gray-600 space-y-2 list-disc list-inside">
              <li>ISO-certified processes</li>
              <li>Multi-level inspection</li>
              <li>Premium fabric sourcing</li>
              <li>Zero-defect commitment</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl shadow-sm hover:shadow-lg transition p-6">
            <img
              src="https://images.unsplash.com/photo-1520974735194-6cbbf4fdf2c6"
              alt="Design"
              className="rounded-2xl mb-6 w-full h-56 object-cover"
            />

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Design & Development
            </h3>

            <ul className="text-gray-600 space-y-2 list-disc list-inside">
              <li>In-house design team</li>
              <li>Custom pattern development</li>
              <li>Trend forecasting & styling</li>
              <li>Rapid sampling turnaround</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
