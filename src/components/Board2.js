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
    seconds: 60,
    score: 0
  };

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds - 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  clickHandler = () => {
    this.setState(prevState => ({
      score: prevState.score + 1
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
        <h1>{this.state.seconds}</h1>
        <h1>Score: {this.state.score}</h1>
        <div className="boardOuter">
          {this.state.holes.map((hole, index) => (
            <div className="boardHole">
              <Mole
                id={hole.id}
                key={index}
                clickHandler={this.clickHandler}
                badClickHandler={this.badClickHandler}
              ></Mole>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ReactTimeout(Board);
