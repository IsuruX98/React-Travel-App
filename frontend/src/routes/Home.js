import React from "react";
import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80"
        title="Your journey Your story"
        text="Choose your favorite destination"
        btnText="Travel Plan"
        url="#"
        btnClass="show"
      />
      <Destination />
    </>
  );
};

export default Home;
