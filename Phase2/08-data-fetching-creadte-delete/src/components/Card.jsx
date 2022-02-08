import { useState } from 'react'

function Card({id, name, price, img_url, deleteFromState, selectItem}) {
  let [buyStatus, setBuyStatus] = useState(true)

  function changeBuyStatus() {
    // setBuyStatus((buyStatus) => !buyStatus)
    setBuyStatus(false)
  }


  function deleteFromDatabase() {
    fetch(`http://localhost:3000/winterThings/${id}`, {
      method: "DELETE"
    })
  }


  function handleDelete() {
    deleteFromState(id)
    deleteFromDatabase()
  }


  return (
    <div className='card' onClick={() => selectItem(id)}>
      <h3>{name}</h3>
      <h6>Price: ${price}</h6>
      <img className="card-img" src={img_url} alt="winter" />
      <button onClick={handleDelete} className="trash-btn">🗑</button>
      {buyStatus ? 
        <button onClick={changeBuyStatus} className='buy-btn'>BUY</button>
      :
        <h3 className="bottom-card">SOLD</h3>
      }     
    </div>  
  );
}

export default Card;




