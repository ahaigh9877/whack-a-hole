import React, { Component } from "react";
import ReactTimeout from "react-timeout";

class TestComponent extends Component {
  state = { thingPresent: false, max: 6, min: 1 };

  showHide = () => {
    this.setState({ thingPresent: true });
    this.props.setTimeout(() => {
      this.setState({ thingPresent: false });
    }, 1000);
  };

  componentDidMount() {
    const randomSecs =
      Math.floor(Math.random() * (this.state.max - this.state.min + 1)) +
      this.state.min;
    console.log("random sex ", randomSecs);
    this.interval = this.props.setInterval(
      () => this.showHide(),
      randomSecs * 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval, this.interval2);
  }

  render() {
    return (
      <div className="boardOuter">
        {this.state.thingPresent && (
          <div
            className="bigHole"
            onClick={() => console.log("clicky-cluk")}
          ></div>
        )}
      </div>
    );
  }
}

export default ReactTimeout(TestComponent);
