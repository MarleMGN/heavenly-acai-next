import React from "react";
import Image from "next/image";
import HeavenlyLogo from "../assets/heavenly-logo.png";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="nav__container">
          <div>
            <Image src={HeavenlyLogo} alt="logo" className="nav__icon" />
          </div>
          <ul className="nav__links">
            <li className="nav__list">
              <div className="nav__link">Home</div>
            </li>
            <li className="nav__list">
              <div className="nav__link">About</div>
            </li>
            <li className="nav__list">
              <div className="nav__link">Events</div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
