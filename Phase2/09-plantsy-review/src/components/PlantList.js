import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantArray}) {

  const CardComponents = plantArray.map(plant => <PlantCard key={plant.id} {...plant}/>)
  // const CardComponents = plantArray.map(plant => <PlantCard key={plant.id} name={plant.name} price={plant.price}/>)

  return (
    <ul className="cards">
      {CardComponents}
    </ul>
  );
}

export default PlantList;
