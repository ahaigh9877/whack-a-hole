import React, { Component } from "react";

class ShowAlert extends Component {
  showAlert() {
    alert("Im an alert");
  }

  render() {
    return (
      <div>
        <button onClick={this.showAlert}>show alert</button>
      </div>
    );
  }
}

export default ShowAlert;
