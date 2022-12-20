import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "../asserts/12.jpg";
import Aboutus from "../components/Aboutus";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={img1} title="About Us" />
      <Aboutus />
      <Footer />
    </>
  );
};

export default About;
