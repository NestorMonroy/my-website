import React  from "react";
import IntroOverlay from "../components/IntroOverlay";
import Banner from "../components/Banner";
import gsap from "gsap";

let tl = gsap.timeline();

const homeAnimation = (completeAnimation) => {
  tl.from(".line span", 0.4, {
    y: 100,
    ease: "power4.out",
    delay: 0.8,
    skewY: 7,
    stagger: {
      amount: 0.1,
    },
  })
    .to(".overlay-top", 1.2, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.2,
    })
    .to(".overlay-bottom", 1.2, {
      width: 0,
      ease: "expo.inOut",
      delay: -1,
      stagger: {
        amount: 0.2,
      },
    })
    .to(".intro-overlay", 0, {
      css: { display: "none" },
    })
    // .from(".case-image img", 1.2, {
    //   scale: 1.4,
    //   ease: "expo.inOut",
    //   delay: -1.8,
    //   stagger: {
    //     amount: 0.2,
    //   },
    //   onComplete: completeAnimation,
    // });
};

const Home = ({ dimensions }) => {
  const [animationComplete, setAnimationComplete] = React.useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  React.useEffect(() => {
    homeAnimation(completeAnimation);
  }, []);

  React.useEffect(() => {
    let vh = dimensions.height * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [dimensions.width, dimensions.height]);

  return (
    <div className="App">
      {animationComplete === false ? <IntroOverlay /> : ""}
      <Banner />
    </div>
  );
};

export default Home;
