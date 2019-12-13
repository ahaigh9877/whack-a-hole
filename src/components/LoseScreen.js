import React, { useEffect } from "react";
import UIfx from "uifx";
import failSound from "../assets/sounds/fail.mp3";

const fail = new UIfx(failSound);

const LoseScreen = props => {
  useEffect(() => {
    fail.play();
  }, []);

  return (
    <div className="loseScreenContainer">
      <div className="loseText">
        YOU LOSE!
        <br />
        <br />
        with a score of {props.score}
        <br />
        No more free travel for you...
      </div>
      <button className="tryAgainButtonLose" onClick={() => props.tryAgain()}>
        try again?
      </button>
    </div>
  );
};

export default LoseScreen;
