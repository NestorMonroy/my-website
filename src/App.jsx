import React from "react";
import { gsap } from "gsap";
import { Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./containers/Home";

const routes = [{ path: "/", name: "Home", Component: Home }];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const App = () => {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  React.useEffect(() => {
    // prevents flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
  return (
    <>
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          <Layout dimensions={dimensions}>
            <Component dimensions={dimensions} />
          </Layout>
        </Route>
      ))}
    </>
  );
};

export default App;
