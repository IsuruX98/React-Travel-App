import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Service = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="Services"
      />
    </>
  );
};

export default Service;
