import React from "react";
import anime from "animejs";
import Content from "./content";
import { useSelector } from "react-redux";

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
          targets: ".wrapper-project .letters",
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
          targets: ".wrapper-project wrapper-project-line",
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
      <div className="wrapper-project">
        <div className="wrapper-project-line"></div>
        <div className="title" ref={(el) => (title = el)}>
          <span className="letters">{state.title}</span>
        </div>
        <div className="wrapper-project-line"></div>
      </div>
      <Content />
    </div>
  );
};

export default Projects;
