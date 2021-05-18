import React from "react";
import { gsap } from "gsap";
import { Route, Switch } from "react-router-dom";
import Layout from "@components/Layout";
import Home from "@pages/Home";

import Navigation from "@components/Navigation";

const App = () => {
  React.useEffect(() => {
    // prevents flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });
  });
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Navigation />
      </Layout>
    </>
  );
};

export default App;
