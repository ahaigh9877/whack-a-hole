import React, { Component } from "react";
import Timeout from "smart-timeout";
import { timeout } from "q";

class TestComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      molePresent: false,
      max: 6,
      min: 3
    };
  }

  getRandom() {
    return (
      (Math.floor(Math.random() * (this.state.max - this.state.min + 1)) +
        this.state.min) *
      1000
    );
  }

  // cheat = { present: false };

  showHide = () => {
    console.log("heelo");
    let showTimer;
    let hideTimer;
    if (!showTimer) {
      console.log("hI HI");
      showTimer = setTimeout(() => {
        console.log("WHY NO DISPLAY???");
        showTimer = null;
        return <p>HELLO MOLE</p>;
      }, 2000);
    } else if (!hideTimer) {
      console.log("in here too?");
      hideTimer = setTimeout(() => {
        hideTimer = null;
        return <div className="noMole"></div>;
      }, 1000);
    }
  };

  moleShow = () => setTimeout(this.showMole(), 6000);

  showMole = () => {
    console.log("hello mole");
    return <div className="bigMole"></div>;
  };

  // gonnaShow = () => {
  //   return <div className="bigMole"></div>;
  // };

  // setShowTimer = () => {
  //   return Timeout.set(this.gonnaShow, 2000);
  // };

  render() {
    return (
      <div className="testBoard">
        <div className="bigHole">{this.moleShow()}</div>
      </div>
    );
  }
}

export default TestComponent;
