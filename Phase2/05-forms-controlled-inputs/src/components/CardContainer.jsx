import Card from './Card'

function CardContainer({itemsArray, deleteItem, selectItem}) {
  // const createCards = itemsArray.map(item => <Card key={item.id} deleteItem={deleteItem} id={item.id} name={item.name} price={item.price} img_url={item.img_url}/>)
  const createCards = itemsArray.map(item => <Card key={item.id} deleteItem={deleteItem} selectItem={selectItem} {...item}/>)


  return (
    <div className='card-container' >
      {createCards}
    </div>
  );
}

export default CardContainer;


