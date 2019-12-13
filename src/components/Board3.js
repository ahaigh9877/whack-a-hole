import React, { Component } from "react";
import ReactTimeout from "react-timeout";
import UIfx from "uifx";
import Mole3 from "./Mole3";
import WinScreen from "./WinScreen";
import Brexometer from "./Brexometer";
import "./Board.css";
import LoseScreen from "./LoseScreen";
import clangSound from "../assets/sounds/clang.mp3";
import tickSound from "../assets/sounds/clock.mp3";

const clang = new UIfx(clangSound);
const ticking = new UIfx(tickSound);

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

  tryAgain = () => {
    console.log("try again");
    this.setState({ gameInProgress: false, seconds: 33, score: 0 });
  };

  startGame = () => {
    setTimeout(() => ticking.setVolume(0.5).play(), 3000);
    this.setState(prevState => ({
      gameInProgress: true,
      seconds: 33,
      score: 0
    }));
  };

  goodClickHandler = () => {
    console.log("good click");
    this.setState(prevState => ({
      score: prevState.score + 3
    }));
  };

  missClickHandler = () => {
    clang.play();
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
    if (this.state.score > 29) {
      return <WinScreen score={this.state.score} tryAgain={this.tryAgain} />;
    } else if (this.state.score < -29) {
      return <LoseScreen score={this.state.score} tryAgain={this.tryAgain} />;
    } else if (this.state.seconds > 0) {
      return (
        <div className="testBoard">
          {!this.state.gameInProgress && (
            <div className="instructionsContainer">
              <div className="instructions">
                <h1 style={{ color: "#003399" }}>Instructions</h1>
                <h3>
                  <em>Brexiters are everywhere!</em>
                </h3>
                Every time they pop up, hit them with your EuroMallet&#8482;...
                but be careful to avoid whacking the decoys or your score could
                go into negative figures and that would be very bad indeed...
              </div>
              <button onClick={this.startGame} className="startButton">
                Start
              </button>
            </div>
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

              <Brexometer score={this.state.score} />

              <div className="scoreText">score</div>
              <div className="scoreCounter">
                <h1>{this.state.score}</h1>
              </div>
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
        </div>
      );
    } else if (this.state.seconds === 0 && this.state.score > 0) {
      return <WinScreen score={this.state.score} tryAgain={this.tryAgain} />;
    } else if (this.state.seconds === 0 && this.state.score <= 0) {
      return <LoseScreen score={this.state.score} tryAgain={this.tryAgain} />;
    }
  }
}

export default ReactTimeout(Board);
