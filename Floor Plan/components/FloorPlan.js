import React from "react";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

function FloorPlan() {
  return (
    
      <>
      <Bedroom className="bedroom" room={1} />
        <Kitchen />
        <Bath className="bath" size="Full" />
        <Bedroom className="bedroom" room={2} />
        <LivingRoom />
        <Bath size="Half" />
        <Bedroom className="bedroom" room={3} />
      
    </>
  
  );
}

export default FloorPlan;
