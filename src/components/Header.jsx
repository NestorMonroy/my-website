import React from "react";
import { withRouter, Link } from "react-router-dom";
import Hamburger from "./Hamburger";

const Header = ({ history }) => {

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">NESTOR MONROY</Link>
            </div>
          </div>
        </div>
      </div>
      <Hamburger/>
    </header>
  );
};

export default withRouter(Header);
