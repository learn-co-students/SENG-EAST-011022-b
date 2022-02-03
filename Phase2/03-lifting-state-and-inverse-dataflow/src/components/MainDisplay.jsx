import greenWinter from '../assets/green-winter.jpeg'

function MainDisplay({name, img_url}) {
  return (
    <div className='main-display'>
      <h2 id='display-name'> {name} </h2>
      <img id='display-img' className="card-img" src={img_url} alt="winter" />
    </div>
  
  );
}

export default MainDisplay;