import "../components/DestinationStyles.css";
import React from "react";

const DestinationData = (props) => {
  return (
    <div className={props.cName}>
      <div className="des-text">
        <h2>{props.heading}</h2>
        <p>{props.desciption}</p>
      </div>
      <div className="des-img">
        <img alt="img1" src={props.img1} />
        <img alt="img2" src={props.img2} />
      </div>
    </div>
  );
};

export default DestinationData;
