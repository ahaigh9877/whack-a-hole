import React from "react";
import croissant from "../assets/friends/croissant.png";
import bread from "../assets/friends/bread.png";
import baguette from "../assets/friends/baguette.png";
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
  const friends = [croissant, bread, baguette];
  const rand = Math.floor(Math.random() * 3);
  const friend = friends[rand];
  return (
    <Animated
      animationIn={inAnims[Math.floor(Math.random() * 8)]}
      animationOut={"bounceOutDown"}
    >
      <div className="friend" onClick={() => props.clickHandler()}>
        <img src={friend} alt="friend" style={{ width: "150px" }} />
      </div>
    </Animated>
  );
};

export default Friend;
