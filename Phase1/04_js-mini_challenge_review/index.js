/***** Deliverable 1 *****/
const header = document.querySelector("#header") // Grabe by id with a #
// const header = document.querySelector(".header") // Grabe by class with a .
// const header = document.querySelector("h1") // grab by HTML element with nothing befor the element name

// console.log(header)
// console.dir(header)


/***** Deliverable 2 *****/
header.style.color = "red"


/***** Deliverable 3 *****/
// console.log("PLAYERS array looks like this:", PLAYERS)

const playerContainer = document.querySelector(".player-container") // Grabe by id with a #

PLAYERS.forEach(playerObj => {
  const playerDiv = document.createElement('div')
  playerDiv.className = "player"
  playerDiv.dataset.number = playerObj.number

  const playerNameH3 = document.createElement('h3')
  playerNameH3.textContent = playerObj.name
  
  const playerImg = document.createElement('img')
  playerImg.src = playerObj.photo
  playerImg.alt = playerObj.name
  // playerImg.style.width = "200px"


   playerDiv.append(playerNameH3)
   playerDiv.append(playerImg)
   playerContainer.append(playerDiv)
})

{/* 
<div class="player" data-number="(Player Number)">
  <h3>
    {player name} (<em>{player nickname}</em>)
  </h3>
  <img src="{player image}" alt="{player name}">
</div> 
*/}


/***** Deliverable 4 *****/

const playerNumber7 = document.querySelector("div[data-number='7']")
playerNumber7.remove()
// console.log(playerNumber7);