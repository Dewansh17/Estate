export default function Amenities({ data }) {
  // wait for backend data
  if (!data) return null;

  return (
    <section id="amenities" className="bg-[#e7f3ef] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading (dynamic) */}
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-2">
          {data.title || "Amenities"}
        </h2>

        {/* Description (dynamic) */}
        <p className="text-gray-500 mb-10">
          {data.description}
        </p>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Image (static as per assignment rule) */}
          <img
            src="/amenities.jpg"
            alt="amenities"
            className="rounded-2xl shadow-lg w-full"
          />

          {/* Right Icons (dynamic from DB) */}
          <div className="grid grid-cols-2 gap-8">
            {data.items?.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-full w-32 h-32 flex flex-col items-center justify-center shadow text-center"
              >
                {/* icon optional fallback */}
                <span className="text-3xl mb-2">
                  {item.icon || "⭐"}
                </span>

                <p className="text-sm font-medium text-gray-700">
                  {item.name || item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <button className="bg-gradient-to-r from-green-400 to-lime-400 px-6 py-2 rounded shadow font-semibold">
            View more
          </button>
        </div>
      </div>
    </section>
  );
}
