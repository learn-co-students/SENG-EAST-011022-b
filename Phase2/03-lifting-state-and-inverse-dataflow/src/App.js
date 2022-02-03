import { useState } from 'react';
import winterThings from './winterThings'
import './reset.css';
import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import MainDisplay from './components/MainDisplay';
import Form from './components/Form';
import CardContainer from './components/CardContainer';
import React from 'react';


function App() {
  const [itemsArray, setItemsArray] = useState(winterThings)
  const [itemId, setItemId] = useState(1)

  function selectItem(id){
    setItemId(id)
  }

  function deleteItem(itemId){
    const newList = itemsArray.filter(item => item.id !== itemId)
    
    setItemsArray(newList)
  }

  const mainDisplayItem = itemsArray.find(item => item.id === itemId)

  return (
    <div>
      <Banner />
      <NavBar />
      <div className='top-content-container'>
        <MainDisplay name={mainDisplayItem?.name} img_url={mainDisplayItem?.img_url} />
        <Form />
      </div>
      <CardContainer itemsArray={itemsArray} deleteItem={deleteItem} selectItem={selectItem}/>
    </div>
  );
}

export default App;
