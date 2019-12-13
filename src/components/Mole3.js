import React, { Component } from "react";
import UIfx from "uifx";
import Friend from "./Friend";
import Foe from "./Foe";
import whackSound from "../assets/sounds/whack.mp3";
import smashSound from "../assets/sounds/smash.mp3";

const whack = new UIfx(whackSound);
const smash = new UIfx(smashSound);

class Mole3 extends Component {
  state = {
    thingPresent: false,
    timeout: false,
    max: 10000,
    min: 2000,
    enemy: null,
    color: ""
  };

  getRandom() {
    return (
      Math.floor(Math.random() * (this.state.max - this.state.min + 1)) +
      this.state.min
    );
  }

  friendOrFoe = () => {
    const coin = Math.random() >= 0.5;
    if (coin) {
      this.setState({ enemy: true });
    } else {
      this.setState({ enemy: false });
    }
    return coin;
  };

  clickHandler = () => {
    console.log("ENEMY?  ", this.state.enemy);
    this.setState({ thingPresent: false, hit: true });
    if (this.state.enemy) {
      whack.play();
      this.props.goodClickHandler();
    } else {
      smash.play();
      this.props.badClickHandler();
    }
  };

  showHide = () => {
    if (this.props.seconds > 0 && !this.state.timeout) {
      this.setState({ timeout: true });
      if (!this.state.thingPresent) {
        return setTimeout(() => {
          this.setState({
            thingPresent: true,
            timeout: false,
            // max: 8000,
            // min: 5000,
            enemy: this.friendOrFoe()
          });
        }, this.getRandom());
      } else {
        return setTimeout(() => {
          this.setState({ thingPresent: false, timeout: false });
        }, 2000);
      }
    }
  };

  // showHide = () => {
  //   if (!this.state.thingPresent) {
  //     return setTimeout(() => {
  //       this.setState({
  //         thingPresent: true,
  //         max: 8000,
  //         min: 5000,
  //         enemy: this.friendOrFoe()
  //       });
  //     }, this.getRandom());
  //   } else {
  //     return setTimeout(() => {
  //       this.setState({ thingPresent: false });
  //     }, 2000);
  //   }
  // };

  // componentDidMount() {
  //   setInterval(() => {
  //     this.showHide();
  //   }, 1000);
  // }

  render() {
    this.showHide();
    return (
      <div className="moleContainer">
        {this.state.thingPresent && this.state.enemy && (
          <Foe clickHandler={this.clickHandler} />
        )}
        {this.state.thingPresent && !this.state.enemy && (
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
