import React from "react";
import "./NavigationHamburger.css";

const navigationHamburger = (props) => {

  let changeClass = props.change ? 'HamburgerChange' : null;
  let classes = ["NavigationHamburgerContainer", props.className, changeClass];

  return (
    <div
      id="hamburgerDiv"
      className={classes.join(" ")}
      onClick={props.show}
    >
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
};

export default navigationHamburger;
