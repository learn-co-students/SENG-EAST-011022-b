import React, {useState} from 'react';
import hogs from "../porkers_data";
import HogTile from './HogTile';

function HogContainer() {
  const [hogArray, setHogArray] = useState(hogs)
 
  const hogTileArray = hogArray.map(hog => {
  return <HogTile 
          key={hog.name} 
          name={hog.name} 
          image={hog.image}
          weight={hog.weight}
          specialty={hog.specialty}
          greased={hog.greased}
          medal={hog["highest medal achieved"]}
          />
  })

  return ( 
    <div className="ui grid container" >
      {hogTileArray}
    </div>
  );
}

export default HogContainer;
