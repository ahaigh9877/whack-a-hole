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
    seconds: 33,
    score: 0,
    gameInProgress: false
  };

  tick() {
    if (this.state.gameInProgress) {
      if (this.state.seconds > 0) {
        this.setState(prevState => ({
          seconds: prevState.seconds - 1
        }));
      } else {
        this.setState({ gameInProgress: false });
      }
    }
  }

  componentDidMount() {
    this.interval = this.props.setInterval(() => this.tick(), 1000);
  }

  startGame = () => {
    this.setState(prevState => ({
      gameInProgress: true,
      seconds: 33,
      score: 0
    }));
  };

  goodClickHandler = () => {
    this.setState(prevState => ({
      score: prevState.score + 3
    }));
  };

  missClickHandler = () => {
    this.setState(prevState => ({ score: prevState.score - 1 }));
  };

  badClickHandler = () => {
    this.setState(prevState => ({
      score: prevState.score - 3
    }));
  };

  componentWillUnmount() {
    this.props.clearInterval(this.interval);
  }

  render() {
    return (
      <div className="testBoard">
        {!this.state.gameInProgress && (
          <button onClick={this.startGame}>Start</button>
        )}
        {this.state.gameInProgress && (
          <div>
            {this.state.seconds <= 30 && (
              <h1>Time left: {this.state.seconds}</h1>
            )}
            <h1>Score: {this.state.score}</h1>
            {this.state.seconds > 30 && (
              <div className="boardOuter">get ready...</div>
            )}
            {this.state.seconds <= 30 && this.state.seconds >= 1 && (
              <div className="boardOuter">
                {this.state.holes.map((hole, index) => (
                  <div className="boardHole" key={index}>
                    <Mole3
                      id={hole.id}
                      key={index}
                      seconds={this.state.seconds}
                      goodClickHandler={this.goodClickHandler}
                      badClickHandler={this.badClickHandler}
                      missClickHandler={this.missClickHandler}
                      gameInProgress={this.state.gameInProgress}
                    ></Mole3>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        {this.state.seconds === 0 && (
          <div className="boardOuter">
            <p>GAME OVER!</p>
            <p>You scored: {this.state.score}</p>
          </div>
        )}
      </div>
    );
  }
}

export default ReactTimeout(Board);
