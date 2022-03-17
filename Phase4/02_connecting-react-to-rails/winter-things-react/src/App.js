import { useEffect, useState } from 'react';
import './reset.css';
import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import MainDisplay from './components/MainDisplay';
import Form from './components/Form';
import CardContainer from './components/CardContainer';
import React from 'react';

import winterThingsAdapter from './adapters/winterThingsAdapter'


function App() {
  const [itemsArray, setItemsArray] = useState([])
  const [itemId, setItemId] = useState()

  useEffect(() => {
    winterThingsAdapter.getAll()
    .then(winterArray => setItemsArray(winterArray))
  }, [])


  function addNewWinterItem(winterObj) {
    setItemsArray(itemsArray => {
      return [...itemsArray, winterObj]
    })
  }

  function selectItem(id){
    setItemId(id)
  }

  function deleteFromState(itemId){
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
        <Form addNewWinterItem={addNewWinterItem}/>
      </div>
      <CardContainer itemsArray={itemsArray} deleteFromState={deleteFromState} selectItem={selectItem}/>
    </div>
  );
}

export default App;
