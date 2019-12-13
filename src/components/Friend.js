import React from "react";
import euro from "../assets/friends/Euro.png";
import tusk from "../assets/friends/Tusk.png";
import croissant from "../assets/friends/croissant.png";
import flag from "../assets/friends/eu-flag.png";
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

const Friend = props => {
  const friends = [euro, tusk, croissant, flag];
  const rand = Math.floor(Math.random() * 4);
  const friend = friends[rand];
  return (
    <Animated animationIn={inAnims[Math.floor(Math.random() * 8)]}>
      <div className="friend" onClick={() => props.clickHandler()}>
        <img src={friend} alt="friend" style={{ width: "150px" }} />
      </div>
    </Animated>
  );
};

export default Friend;
