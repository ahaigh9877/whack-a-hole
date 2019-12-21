import React from "react";
import farage from "../assets/foes/farage.png";
import johnson from "../assets/foes/johnson.png";
import mogg from "../assets/foes/mogg.png";
import gove from "../assets/foes/gove.png";
import { Animated } from "react-animated-css";

const inAnims = [
  "bounceInDown",
  "bounceInLeft",
  "bounceInRight",
  "bounceInUp",
  "flipInX",
  "flipInY",
  "zoomIn",
  "rotateIn"
];

const Foe = props => {
  const faces = [farage, johnson, mogg, gove];
  const rand = Math.floor(Math.random() * 4);
  const face = faces[rand];
  return (
    <Animated animationIn={inAnims[Math.floor(Math.random() * 8)]}>
      <div className="foe" onClick={() => props.clickHandler()}>
        <img src={face} alt="face" style={{ width: "110px" }} />
      </div>
    </Animated>
  );
};

export default Foe;
