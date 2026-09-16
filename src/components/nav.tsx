import React from "react";
import "../components/nav.css";
import Image from "next/image";

const Nav = ({ showLogo }: { showLogo: boolean }) => {
  return (
    <>
      <nav>
        <div className="nav__container">
          <ul className="nav__links-left" style={{ marginRight: showLogo ? undefined : "10px" }}>
            <li className="nav__list">
              <div className="nav__link">Home</div>
            </li>
            <li className="nav__list">
              <div className="nav__link">About</div>
            </li>
          </ul>
          <div className={`nav__icon-container ${showLogo ? "" : "hidden"}`}>
              <Image
                src="/HeavenlyLogo.jpg"
                alt="logo"
                width={150}
                height={150}
                className="nav__icon"
              />
            </div>
          <ul className="nav__links-right" style={{ marginLeft: showLogo ? undefined : "10px" }}>
            <div className="nav__list">
              <div className="nav__link">Events</div>
            </div>
            <div className="nav__list">
              <div className="nav__link">Contact</div>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
