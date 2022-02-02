import { useState } from 'react';
import winterThings from '../winterThings'
import Card from './Card'

function CardContainer() {
  const [itemsArray, setItems] = useState(winterThings)

  const createCards = itemsArray.map(item => <Card key={item.id} name={item.name} price={item.price} img_url={item.img_url}/>)

  return (
    <div className='card-container' >
      {createCards}
    </div>
  );
}

export default CardContainer;