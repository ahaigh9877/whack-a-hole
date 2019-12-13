import React from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import videoUrl from "../assets/winscreen/euFlag.mp4";
import { Animated } from "react-animated-css";

export default props => {
  const { width, height } = useWindowSize();
  return (
    <div className="winScreenContainer">
      <Confetti width={width} height={height} colors={["#003399", "#FFCC00"]} />
      <video className="winBgVideo" loop autoPlay>
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className="winTextContainer">
        <Animated animationIn="tada">
          <div className="winText">EU WIN!!!</div>
        </Animated>
        <h1>You scored: €{props.score}!</h1>
        <button className="tryAgainButtonWin" onClick={() => props.tryAgain()}>
          try again?
        </button>
      </div>
    </div>
  );
};
