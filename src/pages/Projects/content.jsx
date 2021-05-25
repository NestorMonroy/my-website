import React from "react";
import { useSelector } from "react-redux";
import { FiGithub } from "react-icons/fi";


const Content = () => {
  const state = useSelector(
    (state) => state.languageReducer.state.webDevelopment
  );

  return (
    <div className="flip-wrapper">
      {state.content.map((state, index) => {
        return (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={state.imgfront} alt="" />
              </div>
              <div className="container flip-card-back">
                <div className="back-header">
                  <a
                    href={state.goTo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={state.imgDesk} alt="" />
                  </a>
                </div>
                <h2>{state.text.title}</h2>
                {state.text.paragraph.map((para, index) => {
                  return <p key={index}>{para}</p>;
                })}
                {state.text.details.map((detail, index) => {
                  return (
                    <div key={index}>
                      <p>{detail[0]}</p>
                      <p>{detail[1]}</p>
                    </div>
                  );
                })}
                <a href={state.link} rel="noopener noreferrer" target="_blank">
                  <FiGithub className='custom'/>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
