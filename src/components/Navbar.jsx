export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-green-200">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-3">
        <div className="text-2xl font-bold text-green-700">
          Clothify
        </div>

        <div className="hidden md:flex w-1/3 border border-green-300 rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 outline-none"
          />
        </div>

        <div className="flex gap-4 items-center">
          <span className="text-green-700 font-medium">
            +91 954 032 2227
          </span>
        </div>
      </div>

      <nav className="bg-green-50 px-6 py-3 flex gap-6 text-gray-700">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Shop</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}
