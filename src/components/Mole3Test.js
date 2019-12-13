import React, { Component } from "react";
import FriendTest from "./FriendTest";
import FoeTest from "./FoeTest";
import bang from "../assets/simon-bang.gif";

class Mole3Test extends Component {
  state = {
    thingPresent: false,
    timeout: false,
    max: 6000,
    min: 2000,
    enemy: null,
    color: "",
    hit: false
  };

  getRandom = () => {
    return (
      Math.floor(Math.random() * (this.state.max - this.state.min + 1)) +
      this.state.min
    );
  };

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
    this.setState({ thingPresent: false, hit: true });

    if (this.state.enemy) {
      this.props.enemyClickHandler();
    } else {
      this.props.friendClickHandler();
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
            hit: false,
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
          <FoeTest clickHandler={this.clickHandler} />
        )}
        {this.state.thingPresent && !this.state.enemy && (
          <FriendTest clickHandler={this.clickHandler} />
        )}
        {/* {this.state.hit && (
          <img src={bang} alt="bang gif" style={{ width: "150px" }} />
        )} */}
        {!this.state.thingPresent && !this.state.hit && (
          <div
            className="notMole"
            onClick={() => this.props.missClickHandler()}
          ></div>
        )}
      </div>
    );
  }
}

export default Mole3Test;
