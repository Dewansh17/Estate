export default function Hero({ data }) {
  // wait until backend loads
  if (!data) return null;

  return (
    <section id="hero" className="bg-[#eef4f1] py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

        {/* LEFT IMAGE */}
        <img
          src="/building.jpg"
          alt="building"
          className="rounded-xl shadow-lg w-full"
        />

        {/* RIGHT CONTENT */}
        <div className="text-center md:text-left">

          {/* Title */}
          <h2 className="text-4xl font-serif text-gray-800 mb-6">
            {data.title}
          </h2>

          {/* PRICE CARDS */}
          <div className="flex gap-6 mb-6">

            {/* 1 BHK */}
            <div className="border rounded-lg px-6 py-4 bg-white shadow-sm text-center min-w-[150px]">
              <p className="text-sm text-gray-400 line-through">
                {data.price1_old}
              </p>

              <p className="text-2xl font-bold text-green-600">
                {data.price1_new}
              </p>

              <p className="text-xs text-gray-400">onwards</p>
            </div>

            {/* 2 BHK */}
            <div className="border rounded-lg px-6 py-4 bg-white shadow-sm text-center min-w-[150px]">
              <p className="text-sm text-gray-400 line-through">
                {data.price2_old}
              </p>

              <p className="text-2xl font-bold text-green-600">
                {data.price2_new}
              </p>

              <p className="text-xs text-gray-400">onwards</p>
            </div>

          </div>

          {/* Location */}
          <p className="text-gray-600 font-medium">
            {data.location}
          </p>
        </div>
      </div>
    </section>
  );
}
