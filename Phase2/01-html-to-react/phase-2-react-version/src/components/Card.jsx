function Card({name, price, img_url}) {

  // console.log(props);
  // let {name, city} = props
  

  return (
    <div className='card'>
      <h3>{name}</h3>
      <h6>Price: ${price}</h6>
      <img className="card-img" src={img_url} alt="winter" />
    </div>  
  );
}

export default Card;