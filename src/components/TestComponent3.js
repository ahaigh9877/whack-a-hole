import React, { Component } from "react";

class TestComponent extends Component {
  state = {
    thingPresent: false,
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
    if (!this.state.thingPresent) {
      console.log("before show");
      return setTimeout(() => {
        this.setState({ thingPresent: true });
      }, this.getRandom());
    } else {
      return setTimeout(() => {
        console.log("before hide");
        this.setState({ thingPresent: false });
      }, 1000);
    }
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log("before showhide");
      this.showHide();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
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
