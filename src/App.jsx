import React from "react";
import { gsap } from "gsap";
import { Route, Switch } from "react-router-dom";
import Header from "@components/Header";
import Home from "@pages/Home";

const App = () => {
  React.useEffect(() => {
    // prevents flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });
  });
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
};

export default App;
