import React from "react";

const LoseScreen = props => {
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
