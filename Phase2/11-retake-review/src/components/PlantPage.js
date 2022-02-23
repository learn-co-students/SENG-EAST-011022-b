import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";

function PlantPage() {
  const [plantArray, setPlantArray] = useState([])

  function addPlantToState(plant){
    setPlantArray([...plantArray, plant])
  }

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(data => setPlantArray(data))
  }, [])

  return (
    <main>
      <NewPlantForm addPlantToState={addPlantToState}/>
      <PlantList plantArray={plantArray}/>
    </main>
  );
}

export default PlantPage;
