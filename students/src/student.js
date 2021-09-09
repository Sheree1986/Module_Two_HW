import React from "react";
import Score from "./score";
// import App from "./App";

export default function Student(props) {
  return (
    <div className="studentM">
     Name: {props.student.name}
     <br />
     <br />
     <br />
      Bio: {props.student.bio}
      <br />
      <br />
      {props.student.scores.map((scores, index) => (
        <Score score={scores} key={index} />
      ))}
      <br />
      <br />
    </div>
  );
}
