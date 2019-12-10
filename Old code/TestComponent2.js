import React, { Component } from "react";
import ReactTimeout from "react-timeout";

class TestComponent extends Component {
  state = {
    thingPresent: false,
    isClicked: false,
    timeout: false,
    score: 0,
    max: 6,
    min: 3
  };

  // showHide = () => {
  //   if (!this.state.thingPresent) {
  //     return this.props.setTimeout(() => {
  //       this.setState({ thingPresent: true });
  //     }, (Math.floor(Math.random() * (this.state.max - this.state.min + 1)) + this.state.min) * 1000);
  //   } else {
  //     return this.props.setTimeout(() => {
  //       this.setState({ thingPresent: false });
  //     }, 300);
  //   }
  // };

  // rand =
  //   Math.floor(
  //     Math.random() * (this.state.max - this.state.min + 1) + this.state.min
  //   ) * 1000;

  waitShow = time => {
    console.log("waitShow", time);
    // debugger;
    this.props.setTimeout(() => {
      this.setState({ thingPresent: true, isClicked: false, timeout: true });
    }, time);
  };

  waitHide = () => {
    console.log("waitHide");
    this.props.setTimeout(() => {
      this.setState({ thingPresent: false, timeout: true });
    }, 500);
  };

  componentDidMount() {
    this.interval = this.props.setInterval(() => {
      console.log("ComponentDidMount", this.interval);
      if (!this.state.timeout) {
        if (!this.state.thingPresent) {
          return this.waitShow(
            Math.floor(
              Math.random() * (this.state.max - this.state.min + 1) +
                this.state.min
            ) * 1000
          );
        } else {
          this.waitHide();
        }
      } else {
        this.setState({ timeout: false });
      }
    }, 1000);
  }

  componentWillUnmount() {
    this.props.clearInterval(this.interval);
  }

  clickHandler = () => {
    this.setState(prevState => ({
      isClicked: true,
      score: prevState.score + 1,
      thingPresent: false
    }));
    console.log("goodClick");
  };

  badClickHandler = () => {
    this.setState(prevState => ({
      score: prevState.score - 1
    }));
    console.log("badClick");
  };

  render() {
    return (
      <div>
        <h1>Score: {this.state.score}</h1>
        <h2>isClicked? {this.state.isClicked.toString()}</h2>
        <h2>present? {this.state.thingPresent.toString()}</h2>
        <h2>Timeout? {this.state.timeout.toString()}</h2>
        <div className="testBoard">
          <div className="bigHole">
            {this.state.thingPresent && (
              <div
                className="bigMole"
                onClick={() => !this.state.isClicked && this.clickHandler()}
              ></div>
            )}
            {!this.state.thingPresent && (
              <div
                className="noMole"
                onClick={() => this.badClickHandler()}
              ></div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ReactTimeout(TestComponent);
