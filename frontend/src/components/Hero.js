import "../components/HeroStyles.css";

import React from "react";

const Hero = (props) => {
  return (
    <>
      <div className={props.cName}>
        <img alt="Heroimg" src={props.heroImg} />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <br />
          <a href={props.url} className={props.btnClass}>
            {props.btnText}
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
