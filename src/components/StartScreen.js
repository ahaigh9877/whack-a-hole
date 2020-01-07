import React, { Component } from "react";
import ReactTimeout from "react-timeout";
import passport from "../assets/start-screen/Passport.png";
import { Link } from "react-router-dom";

class StartScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 0,
      imageLoaded: false
    };
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  handleImageLoad() {
    this.setState({ imageLoaded: true });
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.interval = this.props.setInterval(() => this.tick(), 1000);
  }

  render() {
    return (
      <div className="startScreenContainer">
        {this.state.imageLoaded ? null : <div>Loading...</div>}
        <div className="passportContainer">
          <img
            onLoad={() => this.setState({ imageLoaded: true })}
            style={this.state.imageLoaded ? {} : { display: "none" }}
            className="passport"
            alt="passport"
            src={passport}
          />
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

export default ReactTimeout(StartScreen);
