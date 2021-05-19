import React from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";

import { disableScroll, enableScroll } from "@hooks/useScrollFunctions";

const Hamburger = () => {
  let [menuIsOpen, setMenuIsOpen] = React.useState(false);

  let hamburgerBar1 = React.useRef(null);
  let hamburgerBar2 = React.useRef(null);
  let hamburgerBar3 = React.useRef(null);
  let menuBackground = React.useRef(null);
  let menuItem1 = React.useRef(null);
  let menuItem2 = React.useRef(null);
  let menuItem3 = React.useRef(null);
  let menuItem4 = React.useRef(null);

  function openMenu() {
    setMenuIsOpen(true);
    disableScroll();
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

    
  }

  return (
    <div>
      {menuIsOpen === false ? (
        <button className="button1" onClick={openMenu}>
          <div
            className="hamburger-bar"
            ref={(e) => {
              hamburgerBar1 = e;
            }}
          ></div>
          <div
            className="hamburger-bar"
            ref={(e) => {
              hamburgerBar2 = e;
            }}
          ></div>
          <div
            className="hamburger-bar"
            ref={(e) => {
              hamburgerBar3 = e;
            }}
          ></div>
        </button>
      ) : (
        <button className="button1" onClick={closeMenu}>
          <div
            className="hamburger-bar"
            ref={(e) => {
              hamburgerBar1 = e;
            }}
          ></div>
          <div
            className="hamburger-bar"
            ref={(e) => {
              hamburgerBar2 = e;
            }}
          ></div>
          <div
            className="hamburger-bar"
            ref={(e) => {
              hamburgerBar3 = e;
            }}
          ></div>
        </button>
      )}
      <div
        className="menu-background"
        ref={(e) => {
          menuBackground = e;
        }}
      >
        <div className="menu-position">
          <section
            ref={(e) => {
              menuItem1 = e;
            }}
          >
            <NavLink exact to="/" onClick={closeMenu}>
              {}
            </NavLink>
          </section>
          <section
            ref={(e) => {
              menuItem2 = e;
            }}
          >
            <NavLink to="/web-development" onClick={closeMenu}>
              {}
            </NavLink>
          </section>
          <section
            ref={(e) => {
              menuItem3 = e;
            }}
          >
            <NavLink to="/photography" onClick={closeMenu}>
              {}
            </NavLink>
          </section>
          <section
            ref={(e) => {
              menuItem4 = e;
            }}
          >
            <NavLink to="/design" onClick={closeMenu}>
              {}
            </NavLink>
          </section>
          {/* <SocialMediaDiv>
            <SocialMedia />
          </SocialMediaDiv> */}
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
