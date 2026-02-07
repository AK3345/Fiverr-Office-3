import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-amber-50 text-gray-700 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-green-700 mb-4 border-b border-green-300 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "About Us",
                "Services",
                "Portfolio",
                "Blogs",
                "Brands",
                "Contact Us",
                "Privacy Policy",
                "Return Policy",
                "Payment Terms",
                "Terms & Conditions",
                "Write for Us",
                "Market Area",
                "Site Map",
              ].map((item, i) => (
                <li key={i} className="hover:text-green-700 cursor-pointer">
                  › {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services (1) */}
          <div>
            <h3 className="text-lg font-semibold text-green-700 mb-4 border-b border-green-300 pb-2">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "Linen Bedding Manufacturers Supplier",
                "Night Gown Dress Manufacturers",
                "Apparel Manufacturers",
                "Wholesale Clothing Supplier",
                "Vintage Clothing Wholesale Suppliers",
                "Tunic Tops Manufacturers",
                "Maxi Dresses Manufacturers",
                "Garment Manufacturers",
                "Resort Wear Manufacturers",
                "Curtain Manufacturers",
                "Cushion Cover Manufacturer",
                "Medical Scrub Manufacturers",
                "Bulk Clothing Manufacturers",
                "Clothing Dropshipping Suppliers",
                "Swimwear Manufacturers",
                "High Fashion Clothing Manufacturers",
                "Home Furnishing Manufacturers",
                "Wholesale Clothing Vendors",
                "Bohemian Clothing Manufacturers",
                "Streetwear Clothing Manufacturers",
              ].map((item, i) => (
                <li key={i} className="hover:text-green-700 cursor-pointer">
                  › {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services (2) */}
          <div>
            <h3 className="text-lg font-semibold text-green-700 mb-4 border-b border-green-300 pb-2">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "OEM Clothing Manufacturers",
                "Shirt Manufacturers",
                "Sustainable Clothing Manufacturers",
                "Plus Size Clothing Manufacturers",
                "Custom Clothing Manufacturers",
                "Cut and Sew Manufacturers",
                "Activewear Manufacturers",
                "Sportswear Manufacturers",
                "Western Wear Manufacturers",
                "Women's Apparel Manufacturers",
                "Wholesale Women's Boutique Clothing",
                "T-Shirt Manufacturers",
                "Kids Wear Manufacturer",
                "Jeans Manufacturers",
                "Face Mask Manufacturers",
                "Export Garment Manufacturers",
                "Small Order Clothing Manufacturer",
                "Private Label Clothing Manufacturer",
              ].map((item, i) => (
                <li key={i} className="hover:text-green-700 cursor-pointer">
                  › {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-lg font-semibold text-green-700 mb-4 border-b border-green-300 pb-2">
              Get In Touch
            </h3>

            <p className="text-sm mb-3">
              <strong>Phone:</strong> +91 9540322227, +91 9350000939
            </p>

            <p className="text-sm mb-3">
              <strong>Email:</strong> info@clothify.com
            </p>

            <p className="text-sm mb-4">
              <strong>Office Address:</strong> Clothify, Shop No. 3, Dayal Bagh
              Shopping Complex, Faridabad – 121009, Haryana.
            </p>

            <p className="text-sm mb-4 flex items-center gap-2 hover:text-green-700 cursor-pointer">
              <MapPin size={16} /> Location in Google Maps
            </p>

            <p className="text-sm mb-6">
              <strong>Registered Address:</strong> SKV Tradex (Clothify), 1264,
              Parshu Ram Colony, Tehsil Camp, Panipat – 132103, Haryana.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 text-green-700">
              <Facebook className="hover:text-green-900 cursor-pointer" />
              <Instagram className="hover:text-green-900 cursor-pointer" />
              <Twitter className="hover:text-green-900 cursor-pointer" />
              <Linkedin className="hover:text-green-900 cursor-pointer" />
              <Youtube className="hover:text-green-900 cursor-pointer" />
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-green-300 mt-12 pt-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Clothify. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
