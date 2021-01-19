import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, onPlateClick, onMoreClick}) {

  const sushiComponents = sushis.map((sushi) => (
    <Sushi 
      key={sushi.id} 
      sushi={sushi} 
      onPlateClick={onPlateClick} 

    />
  ));
  
  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton onMoreClick={onMoreClick}/>
    </div>
  );
}

export default SushiContainer;
