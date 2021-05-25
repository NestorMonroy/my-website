import React from "react";
import { useSelector } from "react-redux";

import anime from "animejs";

const Projects = () => {
  const state = useSelector(
    (state) => state.languageReducer.state.webDevelopment
  );

  let title = React.useRef(null);

  React.useEffect(() => {
    anime
      .timeline({ loop: false })
      .add(
        {
          targets: ".wrapper .letters",
          scale: [4, 1],
          opacity: [0, 1],
          duration: 900,
          easing: "easeInOutExpo",
          delay: anime.stagger(100),
        },
        "+=500"
      )
      .add(
        {
          targets: ".wrapper wrapper-line",
          scaleX: [0, 1],
          duration: 1400,
          easing: "easeInOutExpo",
          delay: anime.stagger(400),
        },
        "-=700"
      );
  });

  return (
    <div className="container">
      <div className="wrapper">
        <div className="wrapper-line"></div>
        <div className="title" ref={(el) => (title = el)}>
          <span className="letters">{state.title}</span>
        </div>
        <div className="wrapper-line"></div>
      </div>
    </div>
  );
};

export default Projects;
