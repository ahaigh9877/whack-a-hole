import React, { Component } from "react";
import ReactTimeout from "react-timeout";
import Mole3 from "./Mole3";
import "./Board.css";

class Board extends Component {
  state = {
    holes: [
      { id: 0, color: "black", molePresent: false },
      { id: 1, color: "black", molePresent: false },
      { id: 2, color: "black", molePresent: false },

      { id: 3, color: "black", molePresent: false },
      { id: 4, color: "black", molePresent: false },
      { id: 5, color: "black", molePresent: false },

      { id: 6, color: "black", molePresent: false },
      { id: 7, color: "black", molePresent: false },
      { id: 8, color: "black", molePresent: false }
    ]
  };

  render() {
    return (
      <div>
        <div className="boardOuter">
          {this.state.holes.map((hole, index) => (
            <div className="boardHole" key={index}>
              <Mole3
                id={hole.id}
                key={index}
                clickHandler={this.clickHandler}
                badClickHandler={this.badClickHandler}
              ></Mole3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ReactTimeout(Board);
