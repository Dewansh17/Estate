import { useState } from "react";

export default function FloorPlan() {
  const [active, setActive] = useState("1bhk");

  const plans = {
    "1bhk": {
      image: "/plan1.jpeg",
      type: "Type - 1BHK",
      area: "Area - 380–411 RERA Sq.ft",
    },
    "2bhk": {
      image: "/plan2.jpeg",
      type: "Type - 2BHK",
      area: "Area - 580–650 RERA Sq.ft",
    },
    "5.6bhk": {
      image: "/plan3.jpeg",
      type: "Type - 5.6BHK",
      area: "Area - 900+ RERA Sq.ft",
    },
  };

  return (
    <section className="bg-gradient-to-b from-[#a6d8c9] to-[#cdeee3] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP FLOOR PLAN */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left big plan */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <img
              src={plans[active].image}
              alt="floor plan"
              className="w-full rounded-xl"
            />
          </div>

          {/* Right details */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">

            {/* Tabs */}
            <div className="flex justify-center gap-4 mb-6">
              {["1bhk", "2bhk", "5.6bhk"].map((t) => (
                <button
                  key={t}
                  onClick={() => setActive(t)}
                  className={`px-4 py-2 rounded-md font-medium ${
                    active === t
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {t.replace("bhk", " bhk")}
                </button>
              ))}
            </div>

            {/* Info */}
            <p className="text-gray-700 mb-2">{plans[active].type}</p>
            <p className="text-gray-600 mb-4">{plans[active].area}</p>
            <p className="text-gray-500 mb-6">Price - Click for price</p>

            {/* Button */}
            <button className="bg-gradient-to-r from-green-400 to-lime-400 px-6 py-2 rounded shadow font-semibold">
              Download Floor Plan
            </button>

            {/* Thumbnails */}
            <div className="flex justify-center gap-3 mt-6">
              {["/plan1.jpeg", "/plan2.jpeg", "/plan3.jpeg"].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="thumb"
                  className="w-20 h-16 object-cover rounded-md border"
                />
              ))}
            </div>
          </div>
        </div>

        {/* VIDEO SECTION */}
        <div className="mt-20">
          <iframe
            className="w-full h-[400px] rounded-2xl shadow-lg"
            src="https://www.youtube.com/embed/KmIf90UvciA"
            title="Project Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  );
}
