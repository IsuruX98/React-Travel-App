import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1489440543286-a69330151c0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="About Us"
      />
    </>
  );
};

export default About;
