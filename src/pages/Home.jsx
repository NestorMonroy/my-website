import React from "react";
import gsap from "gsap";
import { useSelector } from "react-redux";
import imageBack from "../assets/images/mosaic-background.jpg";
import useDimensions from "@hooks/useDimensions";
import useMousePosition from "@hooks/useMousePosition";

const Home = () => {
  const dimensions = useDimensions();
  const { x } = useMousePosition();
  const isTabletOrMobile = dimensions.width <= 768;
  const [tl] = React.useState(gsap.timeline({ delay: 0.8 }));
  const bio = useSelector((state) => state.languageReducer.state.bio);
  //console.log(bio);
  let app = React.useRef(null);
  let content = React.useRef(null);

  React.useEffect(() => {
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const headlineFort = headlineThird.nextSibling;
    const contentP = content.children[1];

    tl.to(app, 0, { css: { visibility: "visible" } });

    tl.staggerFrom(
      [
        headlineFirst.children,
        headlineSecond.children,
        headlineThird.children,
        headlineFort.children,
      ],
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
    <div className="home" ref={(el) => (app = el)}>
      <div className="wraper">
        <div className="wraper-content">
          <div className="wraper-content-inner" ref={(el) => (content = el)}>
            <h1>
              <div className="wraper-content-line">
                <div className="wraper-content-line-inner">{bio.name}</div>
              </div>
              <div className="wraper-content-line">
                {bio.info.map((paragraph) => {
                  return (
                    <div className="wraper-content-line-inner">{paragraph}</div>
                  );
                })}
              </div>
              <div className="wraper-content-line">
                <div className="wraper-content-line-inner">{bio.love}</div>
              </div>
              <div className="wraper-content-line">
                <div className="wraper-content-line-inner">{bio.always}</div>
              </div>
            </h1>
          </div>

          <div className="wraper-content-cube">
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
  );
};

export default Home;
