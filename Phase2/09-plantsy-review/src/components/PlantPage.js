import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantArray, setPlantArray] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(setPlantArray)
    // .then(returnedArray => setPlantArray(returnedArray))
  }, []);

  function handleSearchInput(e){
    setSearchTerm(e.target.value)
  }
  
  function addPlantToState(plantObj){
    setPlantArray(plantArray => [...plantArray, plantObj ])
  }

  const filteredPlantList = plantArray.filter(plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <main>
      <NewPlantForm addPlantToState={addPlantToState}/>
      <Search searchTerm={searchTerm} handleSearchInput={handleSearchInput}/>
      <PlantList plantArray={filteredPlantList}/>
    </main>
  );
}

export default PlantPage;
