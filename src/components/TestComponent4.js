import React, { Component } from "react";

class TestComponent extends Component {
  state = {
    thingPresent: false,
    timeout: false,
    max: 6,
    min: 3
  };

  getRandom() {
    return (
      (Math.floor(Math.random() * (this.state.max - this.state.min + 1)) +
        this.state.min) *
      1000
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
        }, 1000);
      }
    }
    console.log("showHide fail");
  };

  // componentDidMount() {
  //   this.interval = setInterval(() => {
  //     console.log("before showhide");
  //     this.showHide();
  //   }, 1000);
  // }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    this.showHide();
    return (
      <div>
        <h1>Timeout: {this.state.timeout.toString()}</h1>
        <div className="testBoard">
          <div className="bigHole">
            {this.state.thingPresent && <div className="bigMole"></div>}
          </div>
        </div>
      </div>
    );
  }
}

export default TestComponent;
