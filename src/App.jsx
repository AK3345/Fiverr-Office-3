import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import HeroSection from "./components/HeroSection";
import CategoryHighlight from "./components/CategoryHighlight";
import WhyChooseUs from "./components/WhyChooseUs";
import WhatWeDo from "./components/WhatWeDo";
import ManufacturerContent from "./components/ManufacturerContent";
import CollectionsSlider from "./components/CollectionsSlider";
import Testimonials from "./components/Testimonials";
import LatestBlogs from "./components/LatestBlogs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <HeroCarousel />
      <HeroSection />
      <CategoryHighlight />
      <WhyChooseUs />
      <WhatWeDo />
      <ManufacturerContent />
      <CollectionsSlider />
      <Testimonials />
      <LatestBlogs />
      <Footer />
 
    </div>
  );
}

export default App;
