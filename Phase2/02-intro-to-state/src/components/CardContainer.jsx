import winterThings from '../winterThings'
import Card from './Card'

function CardContainer() {
const createCards = winterThings.map(item => <Card key={item.id} name={item.name} price={item.price} img_url={item.img_url}/>)


  return (
    <div class='card-container'>
      {createCards}
    </div>
  );
}

export default CardContainer;