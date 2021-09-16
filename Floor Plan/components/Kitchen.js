import React from "react";
import Sink from "./Sink";
import Oven from "./Oven";

function Kitchen() {
  return (
    <div>
      <h1>Kitchen</h1>
      <Oven />
      <Sink />
    </div>
  );
}

export default Kitchen;
