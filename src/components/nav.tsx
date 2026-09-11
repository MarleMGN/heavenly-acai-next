import React from "react";
import "../components/nav.css"
import Image from "next/image";


const Nav = () => {
  return (
    <>
      <nav>
        <div className="nav__container">
          <div className="nav__icon-container">
            <Image src="/HeavenlyLogo.jpg" alt="logo" width={150} height={150} className="nav__icon" />
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
