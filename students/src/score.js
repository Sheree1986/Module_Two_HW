import React from "react";
// import App from "./App";

export default function Score(props) {
  return (
    <div className="scoreM">
      Date: {props.score.date}
      <br />
      Score: {props.score.score}
    </div>
  );
}
