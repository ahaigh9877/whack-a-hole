import React, { Component } from "react";
import Friend from "./Friend";
import Foe from "./Foe";

class Mole3 extends Component {
  state = {
    thingPresent: false,
    timeout: false,
    max: 7000,
    min: 1000,
    enemy: null,
    color: "",
    hit: false
  };

  componentDidMount() {
    console.log("comp did mount");
  }

  getRandom() {
    return (
      Math.floor(Math.random() * (this.state.max - this.state.min + 1)) +
      this.state.min
    );
  }

  friendOrFoe = () => {
    if (this.props.seconds < 3) {
    }
    const coin = Math.random() >= 0.5;
    if (coin) {
      this.setState({ enemy: true });
    } else {
      this.setState({ enemy: false });
    }
    return coin;
  };

  showHide = () => {
    if (this.props.seconds > 0 && !this.state.timeout) {
      this.setState({ timeout: true });
      if (!this.state.thingPresent) {
        return setTimeout(() => {
          this.setState({
            thingPresent: true,
            timeout: false,
            max: 8000,
            min: 3000,
            enemy: this.friendOrFoe()
          });
        }, this.getRandom());
      } else {
        return setTimeout(() => {
          this.setState({ thingPresent: false, timeout: false });
        }, 1200);
      }
    }
  };

  clickHandler = () => {
    console.log("handlin' click");
    this.setState({ hit: true });
    if (this.state.enemy) {
      this.props.goodClickHandler();
    } else {
      this.props.badClickHandler();
    }
  };

  componentWillUnmount() {
    console.log("comp will unmount");
  }
  render() {
    this.showHide();
    return (
      <div className="moleContainer">
        {this.state.thingPresent && !this.state.hit && this.state.enemy && (
          <Foe clickHandler={this.clickHandler} />
        )}
        {this.state.thingPresent && !this.state.hit && !this.state.enemy && (
          <Friend clickHandler={this.clickHandler} />
        )}
        {!this.state.thingPresent && (
          <div
            className="notMole"
            onClick={() => this.props.missClickHandler()}
          ></div>
        )}
      </div>
    );
  }
}

export default Mole3;
