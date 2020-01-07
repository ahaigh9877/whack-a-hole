import React from "react";
import Board3 from "./components/Board3";
import { Route } from "react-router-dom";
import WinScreen from "./components/WinScreen";
import LoseScreen from "./components/LoseScreen";
import StartScreen from "./components/StartScreen";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={StartScreen} />
      <Route exact path="/game" component={Board3} />
      {/* <WinScreen /> */}
      {/* <StartScreen /> */}
      {/* <TestComponent6 /> */}
      {/* <TestComponent8 /> */}
      {/* <LoseScreen /> */}
      {/* <Board3Test /> */}
    </div>
  );
}

export default App;
