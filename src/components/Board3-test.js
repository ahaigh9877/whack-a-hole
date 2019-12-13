import React, { Component } from "react";
import ReactTimeout from "react-timeout";
import Mole3Test from "./Mole3Test";
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

      { id: 8, color: "black", molePresent: false },
      { id: 9, color: "black", molePresent: false },
      { id: 10, color: "black", molePresent: false },
      { id: 11, color: "black", molePresent: false }
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

  enemyClickHandler = () => {
    console.log.apply("enemy hit");
    this.setState(prevState => ({
      score: prevState.score + 3
    }));
  };

  missClickHandler = () => {
    this.setState(prevState => ({ score: prevState.score - 1 }));
  };

  friendClickHandler = () => {
    this.setState(prevState => ({
      score: prevState.score - 3
    }));
  };

  componentWillUnmount() {
    this.props.clearInterval(this.interval);
  }

  render() {
    if (this.state.seconds > 0) {
      return (
        <div className="testBoard">
          {!this.state.gameInProgress && (
            <button onClick={this.startGame} className="startButton">
              Start
            </button>
          )}
          {this.state.gameInProgress && (
            <div>
              <div className="timeLeftText">time left</div>
              <div className="timeLeft">
                {this.state.seconds > 30 && (
                  <h1 style={{ textAlign: "center", margin: "10px" }}>30</h1>
                )}
                {this.state.seconds <= 30 && (
                  <h1 style={{ textAlign: "center", margin: "10px" }}>
                    {this.state.seconds}
                  </h1>
                )}
              </div>

              <div className="scoreText">score</div>
              <div className="scoreCounter">
                <h1>{this.state.score}</h1>
              </div>
              {this.state.seconds > 30 && (
                <div className="boardOuter">get ready...</div>
              )}
              {this.state.seconds <= 30 && this.state.seconds >= 1 && (
                <div className="boardOuter">
                  {this.state.holes.map(hole => (
                    <div className="boardHole" key={hole.id}>
                      <Mole3Test
                        id={hole.id}
                        key={hole.id}
                        seconds={this.state.seconds}
                        enemyClickHandler={this.enemyClickHandler}
                        friendClickHandler={this.friendClickHandler}
                        missClickHandler={this.missClickHandler}
                        gameInProgress={this.state.gameInProgress}
                      ></Mole3Test>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      );
    }
  }
}

export default ReactTimeout(Board);
