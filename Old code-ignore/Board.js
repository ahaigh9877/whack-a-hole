import React, { Component } from "react";
import ReactTimeout from "react-timeout";
import { Timer } from "./Timer";
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

  addMole = hole => {
    const colors = [
      "blue",
      "red",
      "yellow",
      "green",
      "pink",
      "orange",
      "brown",
      "cyan",
      "purple"
    ];
    const rand = Math.floor(Math.random() * (colors.length - 0) + 0);
    const newHoles = this.state.holes.slice();
    newHoles[hole].color = colors[rand];
    newHoles[hole].molePresent = true;
    this.setState({ holes: newHoles });

    this.props.setTimeout(() => this.removeMole(hole), 1000);
  };

  removeMole = hole => {
    console.log("this stasssste ", this.state);
    const newHoles = this.state.holes.slice();
    newHoles[hole].color = "black";
    newHoles[hole].molePresent = false;
    this.setState({ holes: newHoles });
  };

  render() {
    return (
      <div>
        <div className="boardOuter">
          {this.state.holes.map((hole, index) => (
            <div
              className="boardHole"
              id={index}
              key={index}
              style={{
                backgroundColor: this.state.holes[index].color
              }}
              //   onClick={() => this.addMole(index)}
              onLoad={this.props.setInterval(() => this.addMole(index), 3000)}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}

export default ReactTimeout(Board);
