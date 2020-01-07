import React, { Component } from "react";
import ReactTimeout from "react-timeout";
import passport from "../assets/start-screen/Passport.png";
import Board3 from "../components/Board3";
import { Link } from "react-router-dom";

class StartScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 0
    };
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.interval = this.props.setInterval(() => this.tick(), 1000);
  }

  render() {
    if (this.state.seconds < 6) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="startScreenContainer">
          <div className="passportContainer">
            <img className="passport" alt="passport" src={passport} />
          </div>
          {this.state.seconds > 8 && (
            <div className="introTextContainer">
              These horrible men want to take your TRAVEL RIGHTS away!
              <br />
              Don't let them get away with it...
            </div>
          )}
          {this.state.seconds > 14 && (
            <div className="bashABrexiterContainer">
              <div className="bashABrexiter">
                BASH
                <br />A<br />
                BREXITER!
              </div>
              <Link to={"/game"}>
                <button className="BaBbutton">GO</button>
              </Link>
            </div>
          )}
        </div>
      );
    }
  }
}

export default ReactTimeout(StartScreen);
