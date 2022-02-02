import { useState } from 'react'

function Card({name, price, img_url}) {
  let [buyStatus, setBuyStatus] = useState(true)

  function changeBuyStatus() {
    // setBuyStatus((buyStatus) => !buyStatus)
    setBuyStatus(false)
  }

  return (
    <div className='card'>
      <h3>{name}</h3>
      <h6>Price: ${price}</h6>
      <img className="card-img" src={img_url} alt="winter" />
      <br />
      {buyStatus ? 
      <button onClick={changeBuyStatus} class='buy-button'>BUY</button>
      :
      "SOLD"
      }     
    </div>  
  );
}

export default Card;




