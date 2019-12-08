import React, { Component } from "react";
import "./Board.css";

class Board extends Component {
  state = {
    holes: [
      { id: 0, color: "black" },
      { id: 1, color: "black" },
      { id: 2, color: "black" },

      { id: 3, color: "black" },
      { id: 4, color: "black" },
      { id: 5, color: "black" },

      { id: 6, color: "black" },
      { id: 7, color: "black" },
      { id: 8, color: "black" }
    ]
  };

  handleWhack = hole => {
    const colors = [
      "blue",
      "red",
      "yellow",
      "green",
      "pink",
      "orange",
      "white",
      "brown",
      "cyan",
      "purple"
    ];
    const rand = Math.floor(Math.random() * (colors.length - 0) + 0);
    console.log("RAND ", rand);
    console.log("Color: ", colors[rand]);
    console.log("whack ", hole);
    const newHoles = this.state.holes.slice();
    newHoles[hole].color = colors[rand];
    this.setState({ holes: newHoles });
  };

  render() {
    return (
      <div className="boardOuter">
        {this.state.holes.map((hole, index) => (
          <div
            className="boardHole"
            id={index}
            key={index}
            style={{
              backgroundColor: this.state.holes[index].color
            }}
            onClick={() => this.handleWhack(index)}
          ></div>
        ))}
      </div>
    );
  }
}

export default Board;
