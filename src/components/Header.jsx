import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import AnimatedLogo from "./AnimatedLogo";
import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="cover">
          <div className="inner-header">
            <div className="logo">
              <NavLink exact to="/">
                <AnimatedLogo color="#071626" height="2rem" width="2rem" />
                {""} NESTOR MONROY
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Hamburger />
    </header>
  );
};

export default withRouter(Header);
