export default function Navbar() {
  return (
    <div className="w-full shadow-sm bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-green-600 font-bold text-xl">LIFE SPACES</h1>

        {/* Menu */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#hero">Home</a>
          <a href="#overview">Overview</a>
          <a href="#">Connectivities</a>
          <a href="#amenities">Amenities</a>
          <a href="#explore">Floor Plans</a>
          <a href="#developer">Developer</a>
          <a href="#developer">Contact</a>
        </div>

        {/* Button */}
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-semibold">
          Enquiry Now
        </button>
      </div>
    </div>
  );
}
