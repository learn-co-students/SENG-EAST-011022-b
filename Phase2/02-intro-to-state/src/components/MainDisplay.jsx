import greenWinter from '../assets/green-winter.jpeg'

function MainDisplay() {
  return (
    <div className='main-display'>
      <h2 id='display-name'> NAME </h2>
      <img id='display-img' className="card-img" src={greenWinter} alt="winter" />
    </div>
  
  );
}

export default MainDisplay;