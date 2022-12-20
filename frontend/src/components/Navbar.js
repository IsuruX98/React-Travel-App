import "./NavbarStyles.css";

import React from "react";
import { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

const Navbar = () => {
  let [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((clicked = !clicked));
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Trippy</h1>

      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item) => {
          return (
            <li>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}

        <li>
          <Link className="nav-links-acc" to="/signup">
            Sign up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
