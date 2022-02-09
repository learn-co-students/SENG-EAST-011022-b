import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({deleteFromItemsArray,itemsArray}) {

  const cardCoponents = itemsArray.map(item => <ListingCard key={item.id} deleteFromItemsArray={deleteFromItemsArray} {...item}/>)

  return (
    <main>
      <ul className="cards">
        {cardCoponents}
      </ul>
    </main>
  );
}

export default ListingsContainer;
