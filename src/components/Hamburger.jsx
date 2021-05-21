import React from "react";
import { useSelector } from "react-redux";
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";

import {
  staggerText,
  staggerReveal,
  handleHover,
  handleHoverExit,
  staggerRevealClose,
} from "@animations/menuAnimations";

import { disableScroll, enableScroll } from "@hooks/useScrollFunctions";

const Hamburger = () => {
  const menu = useSelector((state) => state.languageReducer.state.menu);
  // Create varibles of our dom nodes
  let [menuIsOpen, setMenuIsOpen] = React.useState(false);

  let menuLayer = React.useRef(null);
  let reveal1 = React.useRef(null);
  let reveal2 = React.useRef(null);
  let hamburgerBar1 = React.useRef(null);
  let hamburgerBar2 = React.useRef(null);
  let hamburgerBar3 = React.useRef(null);
  let menuItem1 = React.useRef(null);
  let menuItem2 = React.useRef(null);
  let menuItem3 = React.useRef(null);

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
    staggerText(menuItem1, menuItem2, menuItem3);
    setMenuIsOpen(true);
    gsap.to(hamburgerBar1, {
      duration: 0.3,
      rotate: 45,
      y: 7,
    });
    gsap.to(hamburgerBar2, {
      duration: 0.3,
      opacity: 0,
    });
    gsap.to(hamburgerBar3, {
      duration: 0.3,
      rotate: -45,
      y: -7,
    });
    gsap.fromTo(
      menuItem1,
      {
        y: -15,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.25,
        ease: "power1.out",
      }
    );
    gsap.fromTo(
      menuItem2,
      {
        y: -15,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.25,
        delay: 0.1,
        ease: "power1.out",
      }
    );
    gsap.fromTo(
      menuItem3,
      {
        y: -15,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.25,
        delay: 0.2,
        ease: "power1.out",
      }
    );
  }

  function closeMenu() {
    setMenuIsOpen(false);
    enableScroll();
    staggerRevealClose(reveal2, reveal1);
    // Set menu to display none
    gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    gsap.to(hamburgerBar1, {
      duration: 0.3,
      rotate: 0,
      y: 0,
    });
    gsap.to(hamburgerBar2, {
      duration: 0.3,
      opacity: 1,
    });
    gsap.to(hamburgerBar3, {
      duration: 0.3,
      rotate: 0,
      y: 0,
    });
  }

  return (
    <div>
      {menuIsOpen === false ? (
        <button className="button-hamburger" onClick={openMenu}>
          <span
            ref={(el) => {
              hamburgerBar1 = el;
            }}
          ></span>
          <span
            ref={(el) => {
              hamburgerBar2 = el;
            }}
          ></span>
          <span
            ref={(el) => {
              hamburgerBar3 = el;
            }}
          ></span>
        </button>
      ) : (
        <button className="button-hamburger" onClick={closeMenu}>
          <span
            ref={(el) => {
              hamburgerBar1 = el;
            }}
          ></span>
          <span
            ref={(el) => {
              hamburgerBar2 = el;
            }}
          ></span>
          <span
            ref={(el) => {
              hamburgerBar3 = el;
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
              <div className="menu-links ">
                <nav>
                  <ul>
                    <li>
                      <NavLink
                        onClick={closeMenu}
                        onMouseEnter={(el) => handleHover(el)}
                        onMouseOut={(el) => handleHoverExit(el)}
                        ref={(el) => (menuItem1 = el)}
                        exact
                        to="/"
                      >
                        {menu[0]}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        onClick={closeMenu}
                        ref={(el) => (menuItem2 = el)}
                        to="/projects"
                      >
                        {menu[1]}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        onClick={closeMenu}
                        ref={(el) => (menuItem3 = el)}
                        to="/contact"
                      >
                        {menu[2]}
                      </NavLink>
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
