onOff = hole => {
  const newHoles = this.state.holes.slice();
  if (!this.state.holes[hole].molePresent) {
    console.log("this state before ", this.state);
    newHoles[hole].color = "yellow";
    newHoles[hole].molePresent = true;
    this.setState({ holes: newHoles });
    console.log("this state after ", this.state);
  } else {
    console.log("helloe");
    newHoles[hole].color = "black";
    newHoles[hole].molePresent = false;
    this.props.setTimeout(() => this.setState({ holes: newHoles }), 1000);
  }
};
//Math.floor(Math.random() * (10000 - 1000) + 1000)

toggleTimer = () => {
  this.setState(prevState => ({ timer: !prevState.timer }));
};

{
  /* <button onClick={this.toggleTimer}>start</button>
        {this.state.timer && <Timer />} */
}
