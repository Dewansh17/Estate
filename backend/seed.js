import mongoose from "mongoose";
import dotenv from "dotenv";
import Section from "./models/Section.js";

dotenv.config();

const seedData = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  await Section.deleteMany();

  await Section.insertMany([
    {
  name: "hero",
  content: {
     "title": "Vighnaharta Infinity",

  "price1_old": "₹ 74.99 Lacs",
  "price1_new": "₹ 69.99 Lacs",

  "price2_old": "₹ 1.05 Cr",
  "price2_new": "₹ 96.99 Lacs",

  "location": "Kannamwar Nagar, Vikhroli East"
  },
},
{
  name: "about",
  content: {
    title: "About Project",
    description:
      "At Vighnaharta Enclave, every detail reflects the grandest gesture of life in the most authentic and desirable home. Guided by a humanist approach, the architecture places people at the heart of the space. Built on the foundations of comfort, it evokes a true sense of freedom, protection, and belonging.",
    description2:
      "The moment you enter the house, it feels welcoming. Thoughtfully designed with crafted amenities and timeless choices, the space resonates with warmth and authenticity that you and your family truly deserve. It’s the place your soul has long been searching for.",
  },
},

{
  name: "faq",
  content: {
    questions: [
      "What makes Swastik Group a trusted name in real estate in Vikhroli?",
      "What types of residential projects does Swastik Group offer in Vikhroli?",
      "Why should I invest in Swastik Group’s new projects in Vikhroli?",
      "How does Swastik Group ensure quality and sustainability in its projects?",
      "How can I learn more about upcoming residential projects?"
    ],
  },
},

    {
  name: "amenities",
  content: {
    title: "Amenities",
    description:
      "Thoughtfully crafted surroundings that reflect tradition, comfort, and a human-centered design approach.",
    items: [
      { name: "Gymnasium", icon: "🏋️" },
      { name: "Kids Play Area", icon: "🛝" },
      { name: "Jogging Track", icon: "🏃" },
      { name: "Yoga Deck", icon: "🧘" },
    ],
  },
}

  ]);

  console.log("🌱 Database Seeded");
  process.exit();
};

seedData();
