import React, { Component } from "react";
import ReactTimeout from "react-timeout";

class TestComponent extends Component {
  state = { thingPresent: false, isClicked: false, score: 0, max: 6, min: 3 };

  appearTime = () =>
    this.props.setTimeout(() => {
      console.log("appearTime");
      this.setState(prevState => ({
        thingPresent: false,
        isClicked: false
      }));
    }, 500);

  hideTime = () =>
    this.props.setTimeout(() => {
      console.log("hideTime");
      this.setState(prevState => ({
        thingPresent: true,
        isClicked: false
      }));
    }, 5000);

  showHide = () => {
    if (this.state.thingPresent) {
      console.log("it's present");
      this.props.clearTimeout(this.appearTime);
      return this.appearTime();
    } else if (!this.state.thingPresent) {
      console.log("it's absent!");
      this.props.clearTimeout(this.hideTime);
      return this.hideTime();
    }
  };

  // this.props.clearTimeout(appearTime);

  // this.props.clearTimeout(hideTime);

  // showHide = () => {
  //   if (this.state.thingPresent) {
  //     console.log("it's present");
  //     const appearTime = this.props.setTimeout(() => {
  //       this.setState(prevState => ({
  //         thingPresent: false,
  //         isClicked: false
  //       }));
  //     }, 500);
  //     this.props.clearTimeout(appearTime);
  //   } else if (!this.state.thingPresent) {
  //     const hideTime = this.props.setTimeout(() => {
  //       this.setState(prevState => ({
  //         thingPresent: true,
  //         isClicked: false
  //       }));
  //     }, 5000);
  //     this.props.clearTimeout(hideTime);
  //   }
  // };

  // (Math.floor(Math.random() * (this.state.max - this.state.min + 1)) + this.state.min) * 1000)

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

  componentDidMount() {
    this.interval = this.props.setInterval(() => {
      this.showHide();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  clickHandler = () => {
    this.setState(prevState => ({
      isClicked: true,
      score: prevState.score + 1,
      thingPresent: false
    }));
    console.log("clicky cluk");
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
