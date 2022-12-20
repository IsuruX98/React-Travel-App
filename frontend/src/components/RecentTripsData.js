import React from "react";
import "../components/RecentTripsStyles.css";

const RecentTripsData = (props) => {
  return (
    <div className="t-card">
      <div className="t-img">
        <img alt="img" src={props.tImg} />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
};

export default RecentTripsData;
