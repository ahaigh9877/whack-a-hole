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
    ],
    seconds: 30,
    score: 0
  };

  tick() {
    if (this.state.seconds > 0) {
      this.setState(prevState => ({
        seconds: prevState.seconds - 1
      }));
    }
  }

  componentDidMount() {
    this.interval = this.props.setInterval(() => this.tick(), 1000);
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

  componentWillUnmount() {
    this.props.clearInterval(this.interval);
  }

  render() {
    return (
      <div className="testBoard">
        <h1>Time left: {this.state.seconds}</h1>
        <h1>Score: {this.state.score}</h1>
        {this.state.seconds > 0 && (
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
        )}
        {this.state.seconds === 0 && (
          <div className="boardOuter">GAME OVER</div>
        )}
      </div>
    );
  }
}

export default ReactTimeout(Board);
