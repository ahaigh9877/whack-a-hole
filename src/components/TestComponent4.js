import React, { Component } from "react";
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

class TestComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      thingPresent: false,
      timeout: false,
      max: 6,
      min: 3
    };
  }
  // state = {
  //   thingPresent: false,
  //   timeout: false,
  //   max: 6,
  //   min: 3
  // };

  getRandom() {
    return (
      (Math.floor(Math.random() * (this.state.max - this.state.min + 1)) +
        this.state.min) *
      1000
    );
  }

  showHide = () => {
    console.log("in showhide", this.state.timeout);
    if (!this.state.timeout) {
      console.log("timeout? ", this.state.timeout);
      this.setState({ timeout: true });

      //this.setState(prevState => ({ timeout: !prevState.timeout }));
      //debugger;
      console.log("timeout? ", this.state.timeout);
      if (!this.state.thingPresent) {
        console.log("before show? ", this.state.timeout);
        //debugger;
        return setTimeout(() => {
          this.setState({ thingPresent: true, timeout: false });
        }, this.getRandom());
      } else {
        //debugger;
        return setTimeout(() => {
          console.log("before hide? ", this.state.timeout);
          this.setState({ thingPresent: false, timeout: false });
        }, 2000);
      }
    }
    console.log("showHide fail", this.state.timeout);
  };

  render() {
    this.showHide();
    return (
      <div>
        <h1>Timeout: {this.state.timeout.toString()}</h1>
        <div className="testBoard">
          <div className="bigHole">
            {this.state.thingPresent && (
              <Animated
                // animationIn={inAnims[Math.floor(Math.random() * 8)]}
                animationIn={"zoomIn"}
                animationInDuration={1000}
                animationOutDuration={1000}
                isVisible={true}
              >
                <div className="bigMole"></div>
              </Animated>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default TestComponent;
