import "../components/SignUpFormStyles.css";
import React from "react";

const SignUpForm = () => {
  return (
    <div className="conatct">
      <h4>Your happiness is our job...</h4>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Address" />
        <input placeholder="Contact No" />
        <input placeholder="Region" />
        <a href="#">Already a member please login form here...</a>
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
