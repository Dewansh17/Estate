import { useEffect, useState } from "react";
import API from "../api";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Amenities from "../components/Amenities";
import Explore from "../components/Explore";
import FloorPlan from "../components/FloorPlan";
import Developer from "../components/Developer";

export default function Home() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchSections = async () => {
      const res = await API.get("/sections");
      setSections(res.data);
    };

    fetchSections();
  }, []);

  // helper to get section by name
  const getSection = (name) =>
    sections.find((s) => s.name === name)?.content;

  return (
    <>
      <Navbar />

      <Hero data={getSection("hero")} />
      <About data={getSection("about")} />
      <Amenities data={getSection("amenities")} />

      <Explore />
      <FloorPlan />
      <Developer data={getSection("faq")} />
    </>
  );
}
