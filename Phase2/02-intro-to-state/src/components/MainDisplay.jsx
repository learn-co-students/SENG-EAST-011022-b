import greenWinter from '../assets/green-winter.jpeg'

function MainDisplay() {
  return (
    <div class='main-display'>
      <h2 id='display-name'> NAME </h2>
      <img id='display-img' class="card-img" src={greenWinter} alt="winter" />
    </div>
  
  );
}

export default MainDisplay;