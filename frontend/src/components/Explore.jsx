export default function Explore() {
  const buildings = [
    {
      title: "Newly Launched - Vighnaharta Enclave",
      image: "/explore1.jpeg",
    },
    {
      title: "Premium Living - Aaradhya Heights",
      image: "/explore2.jpeg",
    },
    {
      title: "Modern Homes - Infinity Towers",
      image: "/explore3.jpeg",
    },
  ];

  return (
    <section id="explore" className="bg-gradient-to-b from-[#8fd3c1] to-[#b7e4d7] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-serif text-center text-gray-900 mb-12">
          Explore More Buildings in the Township
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {buildings.map((b, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              {/* Image */}
              <img
                src={b.image}
                alt={b.title}
                className="w-full h-72 object-cover"
              />

              {/* Title */}
              <div className="bg-gradient-to-r from-green-300 to-lime-300 text-center py-3 font-medium">
                {b.title}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
