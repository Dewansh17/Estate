import { useState } from "react";

export default function Developer({ data }) {
  const [open, setOpen] = useState(null);

  // FAQs coming from MongoDB (safe fallback to empty array)
  const faqs = data?.questions || [];

  return (
    <section id="developer" className="bg-[#e8f3ef] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ABOUT DEVELOPER */}
        <h2 className="text-3xl md:text-4xl font-serif text-center text-gray-800 mb-4">
          About Developer
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          Vighnaharta Developers is more than just a real estate company—we are
          dream weavers, committed to building not just homes, but better futures.
          With a legacy of expert craftsmanship and forward-thinking vision, we
          bring meaningful spaces that stand the test of time.
        </p>

        {/* STATS */}
        <div className="bg-green-200 rounded-xl grid grid-cols-2 md:grid-cols-5 text-center py-6 mb-16">
          {[
            ["6", "Projects"],
            ["1.32 LAC", "Sq.ft Delivered"],
            ["449+", "Happy Families"],
            ["3.77 LAC", "Sq.ft Ongoing"],
            ["2.7 LAC", "Sq.ft Upcoming"],
          ].map(([num, label], i) => (
            <div key={i}>
              <p className="text-2xl font-bold text-gray-800">{num}</p>
              <p className="text-sm text-gray-600">{label}</p>
            </div>
          ))}
        </div>

        {/* CONSTRUCTION UPDATES */}
        <h3 className="text-2xl font-serif text-center text-gray-800 mb-10">
          Construction Updates
        </h3>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { img: "/building.jpg", title: "Under Construction" },
            { img: "/about-small1.jpeg", title: "Completed" },
            { img: "/about-small2.jpeg", title: "Completed Tower" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden text-center"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="py-4">
                <p className="font-semibold text-gray-700">{item.title}</p>
                <button className="text-sm text-green-600 mt-1">
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h3 className="text-2xl font-serif text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h3>

        <div className="space-y-4 max-w-4xl mx-auto">
          {faqs.map((q, i) => (
            <div
              key={i}
              className="bg-green-200 rounded-lg px-4 py-3 cursor-pointer"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <p className="text-gray-800">{q}</p>
                <span className="text-xl font-bold">
                  {open === i ? "−" : "+"}
                </span>
              </div>

              {open === i && (
                <p className="text-gray-600 mt-3 text-sm">
                  This answer can be edited later from the admin panel.
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
