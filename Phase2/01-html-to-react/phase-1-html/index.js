const cardContainer = document.querySelector(".card-container")

cardContainer.addEventListener('click', handleClick)

function createCards() {
  cardContainer.innerHTML = ''

  winterThings.forEach(winterThing => {
    cardContainer.innerHTML += `
    <div class='card' data-id=${winterThing.id}>
      <h3>${winterThing.name}</h3>
      <h6>Price: $${winterThing.price}</h6>
      <img class="card-img" src=${winterThing.img_url} alt="${winterThing.name}">
    </div>
    `
  })

  replaceMainDisplay(1)
}
createCards()

function handleClick(e){
  if (e.target.className === 'card'){
    const idAsInteger = parseInt(e.target.dataset.id)
    replaceMainDisplay(idAsInteger)
  }
}

function replaceMainDisplay(id) {
  const winterItem = winterThings.find(thing => thing.id === id)

  const name = document.querySelector('#display-name')
  const img = document.querySelector('#display-img')

  name.textContent = winterItem.name
  img.src = winterItem.img_url
}















