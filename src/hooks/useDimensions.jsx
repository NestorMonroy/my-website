import React from "react";

//https://www.pluralsight.com/guides/re-render-react-component-on-window-resize
/* Debounce: Practice of diminishing the number of calls to an event for performance*/

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

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const useDimensions = () => {
  const [dimensions, setDimensions] = React.useState(getWindowDimensions());
  const debouncedHandleResize = debounce(function handleResize() {
    setDimensions(getWindowDimensions());
  }, 1000);

  React.useEffect(() => {
    window.addEventListener("resize", debouncedHandleResize);
    //window.addEventListener('resize', () => console.log(window.innerWidth));
    return () => window.removeEventListener("resize", debouncedHandleResize);
  }, []);

  return {
    dimensions,
  };
};

export default useDimensions;
