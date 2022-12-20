import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1581686251648-588389a0da61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80"
        title="Sign Up"
      />
      <SignUpForm />
      <Footer />
    </>
  );
};

export default SignUp;
