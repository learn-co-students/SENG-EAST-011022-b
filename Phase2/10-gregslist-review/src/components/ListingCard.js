import React, { useState } from "react";

function ListingCard({id, deleteFromItemsArray, location, image, description}) {
  const [toggleLike, setToggleLike] = useState(false)

  function handleToggle(){
    setToggleLike(toggleLike => !toggleLike)
  }


  function handleDelete(){
    deleteFromItemsArray(id)
    deleteFromDatabase()
  }

  function deleteFromDatabase(){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {toggleLike ? (
          <button onClick={handleToggle} className="emoji-button favorite active">โ</button>
        ) : (
          <button onClick={handleToggle} className="emoji-button favorite">โ</button>
        )}
        <strong>{description}</strong>
        <span> ยท {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">๐</button>
      </div>
    </li>
  );
}

export default ListingCard;
