import React, { Component } from "react";
import ReactTimeout from "react-timeout";

class TestComponent extends Component {
  state = { thingPresent: true, isClicked: false, score: 0, max: 6, min: 3 };

  showHide = () => {
    if (this.state.thingPresent) {
      return this.props.setTimeout(() => {
        this.setState({ thingPresent: false, isClicked: false });
      }, 1000);
    } else {
      return this.props.setTimeout(() => {
        this.setState({ thingPresent: true, isClicked: false });
      }, (Math.floor(Math.random() * (this.state.max - this.state.min + 1)) + this.state.min) * 1000);
    }
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
      isClicked: !prevState.isClicked,
      score: prevState.score + 1
    }));
    console.log("clicky cluk");
  };

  render() {
    return (
      <div className="testBoard">
        <h1>Score: {this.state.score}</h1>
        <h2>isClicked? {this.state.isClicked.toString()}</h2>
        <div className="bigHole">
          {this.state.thingPresent && (
            <div
              className="bigMole"
              onClick={() => !this.state.isClicked && this.clickHandler()}
            ></div>
          )}
        </div>
      </div>
    );
  }
}

export default ReactTimeout(TestComponent);
