import React, { useEffect } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import videoUrl from "../assets/winscreen/euFlag.mp4";
import { Animated } from "react-animated-css";
import UIfx from "uifx";
import odeClip from "../assets/sounds/ode-15s.mp3";

export default props => {
  const { width, height } = useWindowSize();
  const ode = new UIfx(odeClip);

  // const playWin = () => {
  //   return ode.play();
  // };

  useEffect(() => {
    console.log("use effect");
    ode.play();
  }, []);
  return (
    <div className="winScreenContainer">
      <Confetti
        width={width}
        height={height}
        numberOfPieces={400}
        colors={["#003399", "#FFCC00"]}
      />
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

// import React, { Component } from "react";
// import { useWindowSize } from "react-use";
// import Confetti from "react-confetti";
// import videoUrl from "../assets/winscreen/euFlag.mp4";
// import { Animated } from "react-animated-css";
// import UIfx from "uifx";
// import odeClip from "../assets/sounds/ode-15s.mp3";

// const ode = new UIfx(odeClip);

// const { width, height } = useWindowSize();

// const playWin = () => {
//   return ode.play();
// };

// class WinScreen extends Component {
//   componentDidMount() {
//     playWin();
//   }

//   render() {
//     return (
//       <div className="winScreenContainer">
//         <Confetti
//           width={width}
//           height={height}
//           numberOfPieces={400}
//           colors={["#003399", "#FFCC00"]}
//         />
//         <video height="1100" className="winBgVideo" loop autoPlay>
//           <source src={videoUrl} type="video/mp4" />
//         </video>
//         <div className="winTextContainer">
//           <Animated animationIn="tada">
//             <div className="winText">EU WIN!!!</div>
//           </Animated>
//           <div className="winExtraText">
//             You defeated all the Brexiters!
//             <br />
//             Everything's gone back to normal now and we can put this horrible
//             nightmare behind us at last.
//           </div>
//           <div className="winScoreText">You scored: €{this.props.score}!</div>
//           <button
//             className="tryAgainButtonWin"
//             onClick={() => this.props.tryAgain()}
//           >
//             try again?
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default WinScreen;
