export default function About({ data }) {
  // wait until backend data loads
  if (!data) return null;

  return (
    <section id="overview" className="bg-[#dfeee8] py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

        {/* LEFT IMAGE COLLAGE — unchanged */}
        <div className="relative flex justify-center items-center">

          <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg">
            <img src="/about-main.jpeg" className="w-full h-full object-cover" />
          </div>

          <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img src="/about-small1.jpeg" className="w-full h-full object-cover" />
          </div>

          <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img src="/about-small2.jpeg" className="w-full h-full object-cover" />
          </div>

        </div>

        {/* RIGHT TEXT CONTENT */}
        <div className="text-center md:text-left">

          {/* 🔹 dynamic title from MongoDB */}
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 mb-6">
            {data.title}
          </h2>

          {/* 🔹 dynamic description from MongoDB */}
          <p className="text-gray-600 leading-relaxed mb-6">
            {data.description}
          </p>

          {/* optional second paragraph (safe fallback) */}
          {data.description2 && (
            <p className="text-gray-600 leading-relaxed mb-8">
              {data.description2}
            </p>
          )}

          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold shadow">
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
}
