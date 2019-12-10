import React, { Component } from "react";
import ReactTimeout from "react-timeout";

class TestComponent extends Component {
  state = { thingPresent: true, max: 6, min: 3 };

  showHide = () => {
    if (this.state.thingPresent) {
      return this.props.setTimeout(() => {
        this.setState({ thingPresent: false });
      }, 300);
    } else {
      return this.props.setTimeout(() => {
        this.setState({ thingPresent: true });
      }, (Math.floor(Math.random() * (this.state.max - this.state.min + 1)) + this.state.min) * 1000);
    }
  };

  componentDidMount() {
    this.interval = this.props.setInterval(() => {
      this.showHide();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
