import React from "react";
import "./NavigationHamburger.css";

const navigationHamburger = (props) => {

  let classes = ["NavigationHamburgerContainer", props.className];

  const changeClasses = () => {
    props.show();
    document.querySelector("#hamburgerDiv").classList.toggle("HamburgerChange");
  };

  return (
    <div
      id="hamburgerDiv"
      className={classes.join(" ")}
      onClick={() => changeClasses()}
    >
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
};

export default navigationHamburger;
