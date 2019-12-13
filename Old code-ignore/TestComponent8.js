import React, { Component } from "react";

class TestComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      things: [
        { id: 1, present: false },
        { id: 2, present: false },
        { id: 3, present: false },
        { id: 4, present: false }
      ],
      max: 6000,
      min: 3000
    };
  }

  getRandom() {
    return (
      Math.floor(Math.random() * (this.state.max - this.state.min + 1)) +
      this.state.min
    );
  }

  // showHide1 = num => {
  //   console.log("num, ", num, typeof num);
  //   if (!this.state.things[num].present) {
  //     console.log("thing no. ", num, " absent");
  //     return setTimeout(() => {
  //       console.log("this state things ", this.state.things);
  //       const newThings = this.state.things;
  //       newThings[num].present = true;
  //       console.log("updated new things ", newThings);
  //       this.setState(state => ({ things: newThings }));
  //     }, this.getRandom());
  //   } else if (this.state.things[num].present) {
  //     console.log("thing no. ", num, " present");
  //     return setTimeout(() => {
  //       const newThings = this.state.things;
  //       newThings[num].present = false;
  //       this.setState(state => ({ things: newThings }));
  //     }, 1000);
  //   }
  // };

  showHide2 = () => {
    const newThings = this.state.things.map(thing => {
      console.log("map thing, ", thing);
      if (!thing.present) {
        console.log("thing present? ", thing.present);
        return setTimeout(() => {
          return thing.present === true;
        }, this.getRandom());
      } else if (thing.present) {
        return setTimeout(() => {
          return thing.present === false;
        }, 1000);
      }
    });
    console.log("new things", newThings);
    this.setState({ things: newThings });
  };

  render() {
    // const coin = Math.round(Math.random() * 3);
    // console.log("coin ", coin);
    // this.showHide1(coin);
    this.showHide2();
    console.log("this state things in RENDER ", this.state.things);

    return (
      <div className="testBoard2">
        <div className="bigHole">
          {this.state.things[0].present && <div className="bigMole"></div>}
        </div>
        {/* <div>number one: {this.state.things[0].present.toString()}</div> */}

        <div className="bigHole">
          {this.state.things[1].present && <div className="bigMole"></div>}
        </div>
        {/* <div>number two: {this.state.things[1].present.toString()}</div> */}

        <div className="bigHole">
          {this.state.things[2].present && <div className="bigMole"></div>}
        </div>
        {/* <div>number three: {this.state.things[2].present.toString()}</div> */}

        <div className="bigHole">
          {this.state.things[3].present && <div className="bigMole"></div>}
        </div>
        {/* <div>number four: {this.state.things[3].present.toString()}</div> */}
      </div>
    );
  }
}

export default TestComponent;
