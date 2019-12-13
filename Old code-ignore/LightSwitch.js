import React from "react";
import ReactTimeout from "react-timeout";

class LightSwitchExample extends React.Component {
  state = {
    on: false
  };
  toggle = () => {
    this.setState({ on: !this.state.on });
  };
  handleClick = e => {
    this.props.setTimeout(this.toggle, 1000);
  };
  render() {
    return (
      <div style={{ backgroundColor: this.state.on ? "yellow" : "gray" }}>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
export default ReactTimeout(LightSwitchExample);
