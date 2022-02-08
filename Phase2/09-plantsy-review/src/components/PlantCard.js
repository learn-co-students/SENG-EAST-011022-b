import React, { useState } from "react";

function PlantCard({id, name, image, price}) {
  const [toggleStock, setToggleStock] = useState(true)


  function handleToggle(){
    setToggleStock(toggleStock => !toggleStock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {toggleStock ? (
        <button onClick={handleToggle} className="primary">In Stock</button>
      ) : (
        <button onClick={handleToggle}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
