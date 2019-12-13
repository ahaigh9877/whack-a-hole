import React, { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import videoUrl from "../assets/winscreen/euFlag.mp4";
import { Animated } from "react-animated-css";
import UIfx from "uifx";
import odeClip from "../assets/sounds/ode-15s.mp3";

export default props => {
  const { width, height } = useWindowSize();
  const ode = new UIfx(odeClip);

  const [confettiSpray, setSpray] = useState(0);

  const sprayConfetti = () => {
    setTimeout(() => {
      setSpray(confettiSpray + 1);
    }, 1500);
  };

  useEffect(() => {
    console.log("use effect");
    ode.play();
    sprayConfetti();
  }, []);

  return (
    <div className="winScreenContainer">
      <Confetti
        width={width}
        height={height}
        numberOfPieces={400}
        colors={["#003399", "#FFCC00"]}
      />
      {confettiSpray === 1 && (
        <React.Fragment>
          <Confetti
            width={width}
            height={height}
            numberOfPieces={200}
            confettiSource={{ w: 10, h: 10, x: 200, y: 200 }}
            colors={["#003399", "#FFCC00"]}
          />
          <Confetti
            width={width}
            height={height}
            numberOfPieces={200}
            confettiSource={{ w: 10, h: 10, x: 1000, y: 200 }}
            colors={["#003399", "#FFCC00"]}
          />
        </React.Fragment>
      )}
      <video height="1100" className="winBgVideo" loop autoPlay>
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className="winTextContainer">
        <Animated animationIn="tada">
          <div className="winText">EU WIN!!!</div>
        </Animated>
        <div className="winExtraText">
          You defeated all the Brexiters!
          <br />
          Everything's gone back to normal now and we can put this horrible
          nightmare behind us at last.
        </div>
        <div className="winScoreText">You scored €{props.score}!</div>
        <button className="tryAgainButtonWin" onClick={() => props.tryAgain()}>
          try again?
        </button>
      </div>
    </div>
  );
};
