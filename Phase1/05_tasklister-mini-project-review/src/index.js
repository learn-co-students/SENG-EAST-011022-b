// Grab elements from the DOM
const taskForm = document.querySelector("#create-task-form")
const taskUl = document.querySelector("#tasks")


// Add event Listeners to DOM Elements
taskForm.addEventListener('submit', grabTaskFromForm)

// Logic
function grabTaskFromForm(e){
  e.preventDefault()
  
  let inputVal =  e.target["new-task-description"].value

  createAndAppendLi(inputVal)
  e.target.reset()

  // // Create LI 
  // let li = document.createElement('li')
  // li.textContent = inputVal


  // // Add LI to the DOM
  // taskUl.append(li)
}

function createAndAppendLi(inputVal) {
 // Create LI 
  let li = document.createElement('li')
  li.textContent = inputVal

  // Add LI to the DOM
  taskUl.append(li)
}


