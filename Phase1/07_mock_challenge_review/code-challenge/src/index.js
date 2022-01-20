getAllRamen()

const menu = document.querySelector("#ramen-menu")
const ramenForm = document.querySelector("#new-ramen")
const ratingBtn = document.querySelector("#rating-btn")



ramenForm.addEventListener("submit", addFormDataToMenu)
ratingBtn.addEventListener("click", increaseRating)

function getAllRamen(){
  fetch("http://localhost:3000/ramens")
   .then(res => res.json())
   .then(ramenArray => {
     ramenArray.forEach(ramenObj => createImageTags(ramenObj))
  })
}


function createImageTags(ramenObj){
  // iterate ramen array 
    // for each ramen object create an img tag
    const ramenImg = document.createElement("img")
    // add src value to tag
    ramenImg.src = ramenObj.image

    // ramenImg.addEventListener('click', () => updateDisplay(ramenObj))
    ramenImg.addEventListener('click', function(e) {
      // add a single ramens details to the page
      // console.log(e);

      const displayImg = document.querySelector('.detail-image')
      displayImg.src = ramenObj.image
      displayImg.alt = ramenObj.name


      const nameH2 = document.querySelector('.name')
      nameH2.textContent = ramenObj.name

      const restH3 = document.querySelector(".restaurant")
      restH3.textContent = ramenObj.restaurant
      
      const ramenRating = document.querySelector("#rating-display")
      ramenRating.textContent = ramenObj.rating
      
      const ramenComment = document.querySelector("#comment-display")
      ramenComment.textContent = ramenObj.comment
    })

    // append each img tag to the dom inside of ramen-menu
    menu.append(ramenImg)
}


function addFormDataToMenu(e) {
  e.preventDefault()

  let newSushiObj = {
    name: e.target.name.value,
    restaurant: e.target.restaurant.value,
    rating: e.target.rating.value,
    image: e.target.image.value,
    comment: e.target["new-comment"].value,
  }

  createImageTags(newSushiObj)
}


function increaseRating(e){
  // console.log(e);
  let span = document.querySelector("#rating-display")

  let number = parseInt(span.textContent)
  let newNum = number + 1

  span.textContent = newNum
}

