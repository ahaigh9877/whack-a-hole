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
      this.setState({ timeout: true });
      if (!this.state.thingPresent) {
        return setTimeout(() => {
          this.setState({ thingPresent: true, timeout: false });
        }, this.getRandom());
      } else {
        return setTimeout(() => {
          this.setState({ thingPresent: false, timeout: false });
        }, 800);
      }
    }
  };

  componentWillUnmount() {}
  render() {
    this.showHide();
    return (
      <div>
        {this.state.thingPresent && (
          <div className="mole" onClick={() => this.props.clickHandler()}></div>
        )}
        {!this.state.thingPresent && (
          <div
            className="noMole"
            onClick={() => this.props.badClickHandler()}
          ></div>
        )}
      </div>
    );
  }
}

export default Mole3;
