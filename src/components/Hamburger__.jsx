import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import {
  staggerText,
  staggerReveal,
  handleHover,
  handleHoverExit,
  staggerRevealClose,
} from "@animations/menuAnimations";

import { gsap } from "gsap";

import { disableScroll, enableScroll } from "@hooks/useScrollFunctions";

const Hamburger = () => {
  const menu = useSelector((state) => state.languageReducer.state.menu);
  //console.log(menu)
  let [menuIsOpen, setMenuIsOpen] = React.useState(false);

  let hamburgerBar1 = React.useRef(null);
  let hamburgerBar2 = React.useRef(null);
  let hamburgerBar3 = React.useRef(null);
  let menuBackground = React.useRef(null);
  let menuItem1 = React.useRef(null);
  let menuItem2 = React.useRef(null);
  let menuItem3 = React.useRef(null);
  let menuItem4 = React.useRef(null);

  let reveal1 = React.useRef(null);
  let reveal2 = React.useRef(null);
  let line1 = React.useRef(null);
  let line2 = React.useRef(null);
  let line3 = React.useRef(null);

  function openMenu() {
    setMenuIsOpen(true);
    disableScroll();
    staggerReveal(reveal2, reveal2);
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
    gsap.to(menuBackground, {
      duration: 0.3,
      opacity: 1,
    });
    gsap.set(menuBackground, {
      zIndex: 999,
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
    gsap.fromTo(
      menuItem4,
      {
        y: -15,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.25,
        delay: 0.3,
        ease: "power1.inOut",
      }
    );
  }

  function closeMenu() {
    setMenuIsOpen(false);
    enableScroll();
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
    gsap.to(menuBackground, {
      duration: 0.3,
      opacity: 0,
      zIndex: -1,
    });
    //Allow menu to have height of 100%
    gsap.to([reveal1, reveal2], {
      duration: 0,
      opacity: 1,
      height: "100%",
    });
    staggerRevealClose(reveal2, reveal1);
    
    staggerText(line1, line2, line3);
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

      <div
        className="menu-background"
        ref={(e) => {
          menuBackground = e;
        }}
      >
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

// const div = styled.div`
//   z-index: 1000;
//   position: fixed;
//   top: 25px;
//   right: 25px;
//   height: 45px;
//   width: 45px;
//   border-radius: 100%;
//   border: none;
//   background-color: rgb(${BACKGROUND.menuButtonBackground});
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: column;
//   padding: 14px 0px;
//   outline: none;
//   cursor: pointer;
// `;

// const div = styled.div`
//   height: 3px;
//   width: 22px;
//   background-color: rgb(${BACKGROUND.homeDarker});
//   border-radius: 5px;
// `;

// const MenuBackground = styled.div`
//   z-index: -1;
//   position: fixed;
//   top: 0px;
//   left: 0px;
//   height: 100%;
//   width: 100%;
//   border: none;
//   background-color: rgb(${BACKGROUND.menuBackground});
//   opacity: 0;
// `;

// const LanguageSelectorPosition = styled.div`
//   position: fixed;
//   top: 24px;
//   right: 28px;
//   height: 45px;
//   width: 45px;
// `;

// const MenuPosition = styled.div`
//   height: 100%;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// `;

// const Link = styled(NavLink)`
//   text-decoration: none;
//   color: ${TXT.color};
//   font-weight: 900;
//   font-size: 25pt;
//   margin: 6px;
//   transition: 300ms ease-in-out;
//   text-transform: uppercase;
//   opacity: 0.4;
//   &:hover {
//     opacity: 1;
//   }
//   &.active {
//     opacity: 1;
//   }
//   @media screen and (max-width: 450px) {
//     font-size: 7.5vw;
//     margin: 25px 0px;
//   }
// `;

// const SocialMediaDiv = styled.div`
//   position: absolute;
//   bottom: 20px;
//   left: 50%;
//   transform: translate(-50%, 0%);
// `;

export default Hamburger;
