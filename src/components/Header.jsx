import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import UpArrow from "../assets/up-arrow-circle.svg";
import { openMenu, closeMenu } from "@animations/menuAnimations";

import useDimensions from "@hooks/useDimensions";
// Define reducer

const Header = (props) => {
  const dimensions = useDimensions();
  const { history } = props;
  const [menuState, setMenuState] = React.useState({ menuOpened: false });

  React.useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setMenuState({ menuOpened: false });
    });
    if (menuState.menuOpened === true) {
      openMenu(dimensions.width);
    } else if (menuState.menuOpened === false) {
      closeMenu();
    }
  });

  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <NavLink to="/" exact>
            MY INFO
          </NavLink>
        </div>
        <div className="nav-toggle">
          <div
            onClick={() => setMenuState({ menuOpened: true })}
            className="hamburger-menu"
          >
            <span></span>
            <span></span>
          </div>
          <div
            className="hamburger-menu-close"
            onClick={() => setMenuState({ menuOpened: false })}
          >
            <img src={UpArrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Header);
