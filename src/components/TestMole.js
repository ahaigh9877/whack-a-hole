import React, { Component } from "react";
import ReactTimeout from "react-timeout";

class Mole extends Component {
  state = { thingPresent: true, max: 15000, min: 6000 };

  showHide = () => {
    if (this.state.thingPresent) {
      return this.props.setTimeout(() => {
        this.setState({ thingPresent: false });
      }, 300);
    } else {
      return this.props.setTimeout(() => {
        this.setState({ thingPresent: true });
      }, Math.floor(Math.random() * (this.state.max - this.state.min + 1)) + this.state.min);
    }
  };

  componentDidMount() {
    this.interval = this.props.setInterval(() => {
      this.showHide();
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        {this.state.thingPresent && (
          <div
            className="mole"
            onClick={() => console.log("clicky-cluk")}
          ></div>
        )}
      </div>
    );
  }
}

export default ReactTimeout(Mole);
