import React from "react";
import arrow from "../assets/brexometer/arrow1.png";

const colourArray = [
  "#ff0000",
  "#ff0000",
  "#ff0000",

  "#ff2400",
  "#ff2400",
  "#ff2400",

  "#ff3500",
  "#ff3500",
  "#ff3500",

  "#ff4300",
  "#ff4300",
  "#ff4300",

  "#ff4f00",
  "#ff4f00",
  "#ff4f00",

  "#ff5900",
  "#ff5900",
  "#ff5900",

  "#ff6300",
  "#ff6300",
  "#ff6300",

  "#ff6c00",
  "#ff6c00",
  "#ff6c00",

  "#ff7500",
  "#ff7500",
  "#ff7500",

  "#ff7d00",
  "#ff7d00",
  "#ff7d00",

  "#ff8500",
  "#ff8500",
  "#ff8500",

  "#ff8d00",
  "#ff8d00",
  "#ff8d00",

  "#ff9400",
  "#ff9400",
  "#ff9400",

  "#ff9c00",
  "#ff9c00",
  "#ff9c00",

  "#ffa300",
  "#ffa300",
  "#ffa300",

  "#ffaa00",
  "#ffaa00",
  "#ffaa00",

  "#ffb100",
  "#ffb100",
  "#ffb100",

  "#ffb800",
  "#ffb800",
  "#ffb800",

  "#ffbf00",
  "#ffbf00",
  "#ffbf00",

  "#ffbf00",
  "#ffbf00",
  "#ffbf00",

  "#ffcc00",
  "#ffcc00",
  "#ffcc00"
];

const Brexometer = props => {
  const angle = props.score * 3;
  const colorNr = props.score + 30;
  return (
    <div className="brexometer">
      <div
        className="arrowHolder"
        style={{ backgroundColor: colourArray[colorNr] }}
      >
        <img
          className="arrow"
          src={arrow}
          alt="arrow"
          style={{ transform: `rotate(${angle}deg)`, margin: "0 auto" }}
        />
        <div className="brexometerText">BREXO&nbsp;&nbsp;METER</div>
      </div>
    </div>
  );
};

export default Brexometer;
