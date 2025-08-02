import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Award from "./Award";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Educations";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";
function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}
export default HomePage;
