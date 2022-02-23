import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantArray}) {

  const plantComponents = plantArray.map(plant => <PlantCard key={plant.id}  {...plant}/>)

  return (
    <ul className="cards">
      {plantComponents}
    </ul>
  );
}

export default PlantList;
