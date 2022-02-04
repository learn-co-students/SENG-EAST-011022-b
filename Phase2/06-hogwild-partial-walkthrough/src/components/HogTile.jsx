import React, {useState} from 'react';
import HogDetail from './HogDetail';

function HogTile({name, image, medal, greased, weight, specialty}) {
  const [toggleDetail, setToggleDetail] = useState(false)


  function handleChangeToggle(){
    setToggleDetail(toggleDetail => !toggleDetail)
  }

  return (
    <div className='pigTile ui four wide column' onClick={handleChangeToggle}>
      <h3>{name}</h3>
      <img className='tile-img' src={image} alt={name} />
      {toggleDetail ?
        <HogDetail  medal={medal} greased={greased} weight={weight} specialty={specialty}/>  
        :
        null 
      }
    </div>
  )
}

export default HogTile;
