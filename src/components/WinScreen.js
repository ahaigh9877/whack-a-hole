import React from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

export default () => {
  const { width, height } = useWindowSize();
  return (
    <div>
      U WIN{" "}
      <Confetti width={width} height={height} colors={["#003399", "#FFCC00"]} />
    </div>
  );
};
