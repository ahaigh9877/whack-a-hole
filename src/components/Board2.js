import React, { Component } from "react";
import ReactTimeout from "react-timeout";
import { Timer } from "./Timer";
import Mole from "./Mole";
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
    ],
    seconds: 0
  };

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  render() {
    return (
      <div>
        <div className="boardOuter">
          {this.state.holes.map((hole, index) => (
            <div className="boardHole">
              <Mole id={hole.id} key={index}></Mole>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ReactTimeout(Board);
