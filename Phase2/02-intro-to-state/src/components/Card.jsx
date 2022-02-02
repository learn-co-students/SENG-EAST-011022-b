

function Card({name, price, img_url}) {

  return (
    <div className='card'>
      <h3>{name}</h3>
      <h6>Price: ${price}</h6>
      <img className="card-img" src={img_url} alt="winter" />
      <br />
      <button class='buy-button'>BUY</button>
    </div>  
  );
}

export default Card;




