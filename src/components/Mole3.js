import React, { Component } from "react";

class Mole3 extends Component {
  state = {
    thingPresent: false,
    timeout: false,
    max: 15000,
    min: 6000
  };
  getRandom() {
    return (
      Math.floor(Math.random() * (this.state.max - this.state.min + 1)) +
      this.state.min
    );
  }

  showHide = () => {
    if (!this.state.timeout) {
      console.log("in showhide");
      this.setState({ timeout: true });
      if (!this.state.thingPresent) {
        console.log("before show");
        return setTimeout(() => {
          this.setState({ thingPresent: true, timeout: false });
        }, this.getRandom());
      } else {
        return setTimeout(() => {
          console.log("before hide");
          this.setState({ thingPresent: false, timeout: false });
        }, 500);
      }
    }
    console.log("showHide fail");
  };
  render() {
    this.showHide();
    return <div>{this.state.thingPresent && <div className="mole"></div>}</div>;
  }
}

export default Mole3;
