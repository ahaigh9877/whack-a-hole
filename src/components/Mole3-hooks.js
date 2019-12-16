import React, { useState } from "react";
import UIfx from "uifx";
import Friend from "./Friend";
import Foe from "./Foe";
import whackSound from "../assets/sounds/whack.mp3";
import smashSound from "../assets/sounds/smash.mp3";

const whack = new UIfx(whackSound);
const smash = new UIfx(smashSound);

const MoleHooks = props => {
  const [thingPresent, setThingPresent] = useState(false);
  const [enemy, setEnemy] = useState(null);

  const max = 10000;
  const min = 2000;

  const getRandom = () => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const friendOrFoe = () => {
    const coin = Math.random() >= 0.5;
    coin ? setEnemy(true) : setEnemy(false);
  };

  const clickHandler = () => {
    setThingPresent(false);
    if (enemy) {
      smash.play();
      props.goodClickHandler();
    } else {
      whack.play();
      props.badClickHandler();
    }
  };

  const showHide = () => {
    console.log("thing present? ", thingPresent);
    if (!thingPresent) {
      return setTimeout(() => {
        setThingPresent(true);
        setEnemy(() => friendOrFoe());
      }, getRandom());
    } else if (thingPresent) {
      return setTimeout(() => {
        setThingPresent(false);
      }, 2000);
    }
  };

  showHide();

  if (thingPresent && enemy) {
    return (
      <div className="moleContainer">
        <Foe clickHandler={clickHandler} />
      </div>
    );
  } else if (thingPresent && !enemy) {
    return (
      <div className="moleContainer">
        <Friend clickHandler={clickHandler} />
      </div>
    );
  } else if (!thingPresent) {
    return (
      <div className="notMole" onClick={() => props.missClickHandler()}></div>
    );
  }
};

export default MoleHooks;
