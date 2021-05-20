import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

import {
  staggerText,
  staggerReveal,
  handleHover,
  handleHoverExit,
  staggerRevealClose,
} from "@animations/menuAnimations";

import { disableScroll, enableScroll } from "@hooks/useScrollFunctions";

const Hamburger = () => {
  // Create varibles of our dom nodes
  let [menuIsOpen, setMenuIsOpen] = React.useState(false);

  let hamburgerBar1 = React.useRef(null);
  let hamburgerBar2 = React.useRef(null);
  let hamburgerBar3 = React.useRef(null);

  let menuLayer = React.useRef(null);
  let reveal1 = React.useRef(null);
  let reveal2 = React.useRef(null);
  let line1 = React.useRef(null);
  let line2 = React.useRef(null);
  let line3 = React.useRef(null);

  function openMenu() {
    disableScroll();
    gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
    //Allow menu to have height of 100%
    gsap.to([reveal1, reveal2], {
      duration: 0,
      opacity: 1,
      height: "100%",
    });
    staggerReveal(reveal1, reveal2);
    staggerText(line1, line2, line3);
    setMenuIsOpen(true);
  }
  function closeMenu() {
    setMenuIsOpen(false);
    enableScroll();
    staggerRevealClose(reveal2, reveal1);
    // Set menu to display none
    gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
  }

  return (
    <div>
      {menuIsOpen === false ? (
        <button className="button-hamburger" onClick={openMenu}>
          <span
            ref={(e) => {
              hamburgerBar1 = e;
            }}
          ></span>
          <span
            ref={(e) => {
              hamburgerBar2 = e;
            }}
          ></span>
          <span
            ref={(e) => {
              hamburgerBar3 = e;
            }}
          ></span>
        </button>
      ) : (
        <button className="button-hamburger" onClick={closeMenu}>
          <span
            ref={(e) => {
              hamburgerBar1 = e;
            }}
          ></span>
          <span
            ref={(e) => {
              hamburgerBar2 = e;
            }}
          ></span>
          <span
            ref={(e) => {
              hamburgerBar3 = e;
            }}
          ></span>
        </button>
      )}
      <div ref={(el) => (menuLayer = el)} className="hamburger-menu">
        <div
          ref={(el) => (reveal1 = el)}
          className="menu-secondary-background-color"
        ></div>
        <div ref={(el) => (reveal2 = el)} className="menu-layer">
          <div className="container">
            <div className="wrapper">
              <div className="menu-links">
                <nav>
                  <ul>
                    <li>
                      <Link
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={(el) => (line1 = el)}
                        to="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={(el) => (line2 = el)}
                        to="/projects"
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={(el) => (line3 = el)}
                        to="/contact-us"
                      >
                        Contact me
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
