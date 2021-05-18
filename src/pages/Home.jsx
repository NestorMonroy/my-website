import React from "react";
import gsap from "gsap";
import imageBack from "../assets/images/mosaic-background.jpg";
import useDimensions from "@hooks/useDimensions";
import useMousePosition from "@hooks/useMousePosition";

const Home = () => {
  const dimensions = useDimensions();
  const { x, y } = useMousePosition();
  const isTabletOrMobile = dimensions.width <= 768;

  const [tl] = React.useState(gsap.timeline({ delay: 0.8 }));

  let app = React.useRef(null);
  let content = React.useRef(null);

  React.useEffect(() => {
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];

    tl.to(app, 0, { css: { visibility: "visible" } });

    tl.staggerFrom(
      [headlineFirst.children, headlineSecond.children, headlineThird.children],
      1,
      {
        y: 44,
        ease: "power3.out",
        delay: 0.8,
      },
      0.15,
      "Start"
    ).from(contentP, 1, { y: 20, opacity: 0, ease: "power3.out" }, 1.4);
  }, [tl]);

  let first = {
    transform: `rotateX(${x / 10}deg) rotateY(0deg) translateZ(${
      isTabletOrMobile ? 50 : 100
    }px)`,
  };

  let second = {
    transform: `rotateX(${x / 10}deg) rotateY(90deg) translateZ(${
      isTabletOrMobile ? 50 : 100
    }px)`,
  };
  let third = {
    transform: `rotateX(${x / 10}deg) rotateY(180deg) translateZ(${
      isTabletOrMobile ? 50 : 100
    }px)`,
  };
  let fourth = {
    transform: `rotateX(${x / 10}deg) rotateY(-90deg) translateZ(${
      isTabletOrMobile ? 50 : 100
    }px)`,
  };

  let fifth = {
    transform: `rotateX(${90 + x / 10}deg) translateZ(${
      isTabletOrMobile ? 50 : 100
    }px)`,
  };
  let sixth = {
    transform: `rotateX(${-90 + x / 10}deg) translateZ(${
      isTabletOrMobile ? 50 : 100
    }px)`,
  };
  return (
    <div className="container">
      <div className="hero" ref={(el) => (app = el)}>
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={(el) => (content = el)}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Nestor Monroy</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    - Software Engineer
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    - Full Stack Developer
                  </div>
                </div>
              </h1>
            </div>

            <div className="wrap">
              <div className={"cube"}>
                <img src={imageBack} alt="" style={first} />
                <img src={imageBack} alt="" style={second} />
                <img src={imageBack} alt="" style={third} />
                <img src={imageBack} alt="" style={fourth} />
                <img src={imageBack} alt="" style={fifth} />
                <img src={imageBack} alt="" style={sixth} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
