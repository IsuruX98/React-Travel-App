import "../components/DestinationStyles.css";
import img1 from "../asserts/1.jpg";
import img2 from "../asserts/8.jpg";
import img3 from "../asserts/3.jpg";
import img4 from "../asserts/4.jpg";

import React from "react";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Populer destination</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>
      <DestinationData
        cName="first-des"
        heading="Lorem ipsum dolor sit amet"
        desciption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        img1={img1}
        img2={img2}
      />
      <DestinationData
        cName="first-des revese"
        heading="Lorem ipsum dolor sit amet"
        desciption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        img1={img3}
        img2={img4}
      />
    </div>
  );
};

export default Destination;
