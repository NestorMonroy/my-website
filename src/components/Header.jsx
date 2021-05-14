import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <h1 className="header-title">
      <Link to="/">Home</Link>
    </h1>

  </div>
);

export default Header;
