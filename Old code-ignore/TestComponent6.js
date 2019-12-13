import React, { Component } from "react";
import Timeout from "smart-timeout";

class TestComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  cheat = { present: false };

  showHide = () => {
    console.log("this cheat present ", this.cheat.present);
    if (!this.cheat.present) {
      return setTimeout(() => {
        this.cheat.present = true;
        this.setState({ thingPresent: true });
        console.log("true? ", this.cheat.present);
      }, this.getRandom());
    } else if (this.cheat.present) {
      return setTimeout(() => {
        this.setState({ thingPresent: false });
        this.cheat.present = false;
      }, 1000);
    }
  };

  render() {
    this.showHide();

    return (
      <div className="testBoard">
        <p>Present?{this.cheat.present.toString()}</p>
        <div className="bigHole">
          {this.cheat.present && <div className="bigMole"></div>}
        </div>
      </div>
    );
  }
}

export default TestComponent;
