import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [itemsArray, setItemsArray] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(setItemsArray)
    // .then(dataItems => setItemsArray(dataItems))
  }, [])

  function deleteFromItemsArray(itemId){
    const newStateArray = itemsArray.filter(item => item.id !== itemId)
    setItemsArray(newStateArray)
  }


  const filteredItems = itemsArray.filter(item => item.description.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="app">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <ListingsContainer deleteFromItemsArray={deleteFromItemsArray} itemsArray={filteredItems}/>
    </div>
  );
}

export default App;
