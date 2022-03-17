import greenWinter from '../assets/green-winter.jpeg'

function MainDisplay({name, img_url}) {
  return (
    <div className='main-display'>
      <h2 id='display-name'> {name || "NAME"} </h2>
      <img id='display-img' className="card-img" src={img_url || greenWinter} alt="winter" />
    </div>
  
  );
}

// NOT: instead of doing the or statments (||) on lines 6 & 7 you can add default props to any functional component useing the syntax below.

// MainDisplay.defaultProps = {
//   name: "NAME",
//   img_url: greenWinter
// }

export default MainDisplay;