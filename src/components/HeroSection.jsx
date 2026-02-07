export default function HeroSection() {
  return (
   <section className="min-h-screen bg-green-50 px-6 flex items-center">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div className="relative flex justify-center">
          {/* Main Image */}
          <img
            src="https://marketplace.canva.com/EAFVHstxnwk/1/0/800w/canva-beige-aesthetic-exclusive-fashion-wear-collection-clothing-banner-yv-HRWs1aMc.jpg"
            alt="Fashion"
            className="rounded-3xl w-[320px] shadow-lg"
          />

          {/* Experience Badge */}
          <div className="absolute -right-6 top-10 bg-green-600 text-white rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-lg">
            <span className="text-2xl font-bold">15+</span>
            <span className="text-sm text-center leading-tight">
              Years of<br />Experience
            </span>
          </div>

          {/* Bottom Image */}
          <img
            src="https://images.livemint.com/img/2022/02/11/1600x900/INDIA-UNEMPLOYMENT-TEXTILES-SUPPLIES-1_1644554787632_1644554808053.JPG"
            alt="Manufacturing"
            className="absolute -bottom-14 right-0 w-64 rounded-2xl shadow-lg border-4 border-green-50"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-green-700 font-medium mb-3">
            Welcome to Clothify!
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Clothing <span className="text-green-600">Manufacturers</span> & <br />
            Garment Exporters in India
          </h1>

          <p className="mt-5 text-gray-600 max-w-xl">
            Your trusted partner in clothing manufacturing and apparel export.
            Clothify combines creative design, premium fabrics, and modern
            production to help brands scale globally with confidence.
          </p>

          {/* Services Pills */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-5 py-2 rounded-full bg-green-100 text-green-800 text-sm">
              OEM & ODM Services
            </span>
            <span className="px-5 py-2 rounded-full bg-green-100 text-green-800 text-sm">
              Custom Design
            </span>
            <span className="px-5 py-2 rounded-full bg-green-100 text-green-800 text-sm">
              Premium Materials
            </span>
          </div>

          {/* Stats */}
          <div className="mt-8 flex flex-wrap gap-6">
            <div className="bg-white rounded-2xl px-8 py-6 shadow">
              <p className="text-3xl font-bold text-green-600">4.5</p>
              <p className="text-yellow-400">★★★★★</p>
              <p className="text-sm text-gray-500 mt-1">
                15.5K Genuine Ratings
              </p>
            </div>

            <div className="bg-white rounded-2xl px-8 py-6 shadow flex items-center">
              <p className="text-xl font-semibold text-gray-800">
                <span className="text-green-600 font-bold">500K+</span> Pieces Annually
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
