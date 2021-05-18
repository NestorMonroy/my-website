import gsap from "gsap";

let tl = gsap.timeline();

export const openMenu = (width) => {
  // tl.to("nav", 0, {
  //   css: { display: "block" },
  // })
    tl.to("body", 0, { css: { overflow: "hidden" } })
    .to(".main", 1, {
      //x: width <= 654 ? "-70vh" : -(window.innerHeight / 2),
      x: -(window.innerHeight),
      ease: "expo.inOut",
    })
    .to(".hamburger-menu span", 0.6, {
      delay: -1,
      scaleX: 0,
      transformOrigin: "50% 0%",
      ease: "expo.inOut",
    })
    .to(".hamburger-menu-close", 0.6, {
      delay: -0.8,
      css: { display: "block" },
    });
};

export const closeMenu = () => {
  // tl.to(".main", 1, {
  //   x: 0,
  //   ease: "expo.inOut",
  // })
    tl.to(".hamburger-menu span", 0.6, {
      delay: -0.6,
      scaleX: 1,
      transformOrigin: "50% 0%",
      ease: "expo.inOut",
    })
    .to(".hamburger-menu-close", 0, {
      delay: -0.1,
      //x:-10,
      css: { display: "none" },
    })
    .to("body", 0, { css: { overflow: "auto" } })
    // .to("nav", 0, {
    //   css: { display: "none" },
    // });
};
