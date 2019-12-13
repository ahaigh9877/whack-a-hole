// import React from "react";
// import hat from "../assets/foes/hat.png";
// import cowboyHat from "../assets/foes/cowboy-hat.png";
// import santaHat from "../assets/foes/santa-hat.png";
// import { Animated } from "react-animated-css";
// import bang from "../assets/simon-bang.gif";

// const inAnims = [
//   "bounceInDown",
//   "bounceInLeft",
//   "bounceInRight",
//   "bounceInUp",
//   "flipInX",
//   "flipInY",
//   "zoomIn",
//   "rotateIn"
// ];

// const showBang = () => {
//   console.log("show bang");
//   return <img src={bang} alt="bang gif" style={{ width: "150px" }} />;
// };

// const Foe = props => {
//   const faces = [hat, cowboyHat, santaHat];
//   const rand = Math.floor(Math.random() * 3);
//   const face = faces[rand];
//   return (
//     <Animated
//       animationIn={inAnims[Math.floor(Math.random() * 8)]}
//       animationOut={"bounceOutDown"}
//     >
//       <div
//         className="foe"
//         onClick={() => {
//           showBang();
//           props.clickHandler();
//         }}
//       >
//         <img src={face} alt="face" style={{ width: "150px" }} />
//       </div>
//     </Animated>
//   );
// };

// export default Foe;

import React, { Component } from "react";
import hat from "../assets/foes/hat.png";
import cowboyHat from "../assets/foes/cowboy-hat.png";
import santaHat from "../assets/foes/santa-hat.png";
import { Animated } from "react-animated-css";
import bang from "../assets/simon-bang.gif";

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

const showBang = () => {
  console.log("show bang");
  return <img src={bang} alt="bang gif" style={{ width: "150px" }} />;
};

const faces = [hat, cowboyHat, santaHat];
const rand = Math.floor(Math.random() * 3);
const face = faces[rand];

class FoeTest extends Component {
  state = { bang: false };
  displayBang = () => {
    this.setState({ bang: true });
  };
  render() {
    return (
      <Animated
        animationIn={inAnims[Math.floor(Math.random() * 8)]}
        animationOut={"bounceOutDown"}
      >
        <div
          className="foe"
          onClick={() => {
            this.displayBang();
            this.props.clickHandler();
            console.log("state ", this.state);
          }}
        >
          {this.state.bang && (
            <img src={bang} alt="bang gif" style={{ width: "150px" }} />
          )}
          <img src={face} alt="face" style={{ width: "150px" }} />
        </div>
      </Animated>
    );
  }
}

export default FoeTest;
