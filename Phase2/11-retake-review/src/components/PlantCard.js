import React, {useState} from "react";

function PlantCard({id, name, image, price}) {
  const [toggleStock, setToggleStock] = useState(true)
  

  function handleClick(){
    setToggleStock(!toggleStock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {toggleStock ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
