import React, { Component } from "react";

class TestComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      thing1Present: false,
      thing2Present: false,
      timeout: false,
      max: 6000,
      min: 3000
    };
  }

  thing1show() {
    this.setState({ thing1Present: true });
    setTimeout(this.thing1show, Math.random() * 5000);
  }

  thing1hide() {
    this.setState({ thing1Present: false });
    setTimeout(this.thing1show, 1000);
  }

  thing1showHide() {
    if (!this.state.thing1Present) {
      return () => this.thing1show();
    } else {
      return () => this.thing1hide();
    }
  }

  render() {
    this.thing1showHide();
    return (
      <div>
        <div className="testBoard">
          <div className="bigHole">
            {!this.state.thing1Present && <div className="bigMole"></div>}
            {this.state.thing1Present && <div className="noMole"></div>}
          </div>
          <div className="bigHole"></div>
        </div>
      </div>
    );
  }
}

export default TestComponent;
