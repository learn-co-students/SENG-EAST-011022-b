// DELIVERABLE 1 -----------------------

function getSingleBook(){
  fetch("http://localhost:3000/books/1")
  .then(res => res.json())
  .then(bookObj => displayBookDetail(bookObj ))
}
getSingleBook()

function displayBookDetail(bookObj){
  let title = document.querySelector("#book-title")
  title.textContent = bookObj.title
  
  let subtitle = document.querySelector("#book-subtitle")
  subtitle.textContent = bookObj.subtitle
  
  let author = document.querySelector("#book-author")
  author.textContent = bookObj.author
  
  let description = document.querySelector("#book-description")
  description.textContent = bookObj.description
  
  let img = document.querySelector("#book-img")
  img.src = bookObj.img_url 
  img.alt = bookObj.title
  
  
  const userListUl = document.querySelector('.user-list')
  userListUl.innerHTML = ''
  
  bookObj.users.forEach(user => {
    
    const li = document.createElement('li')
    li.textContent = user.username
    
    userListUl.append(li)
  });
  
}

// DELIVERABLE 2 --------------------------------------------------
function getAllBooks(){
  fetch("http://localhost:3000/books")
  .then(res => res.json())
  .then(booksArray => displayBookList(booksArray))
}
getAllBooks()


function displayBookList(booksArray){

  const bookListUl = document.querySelector('#book-list')
  bookListUl.innerHTML = ''
  
  booksArray.forEach(book => {
    const bookLi = document.createElement("li")
    bookLi.textContent = book.title

    bookListUl.append(bookLi)
  })
}


// DELIVERABLE 3----------------------------------------
const userForm = document.querySelector('.user-form')

userForm.addEventListener('submit', getFormInput)


function getFormInput(e){
  e.preventDefault()

  const userInput = e.target.username.value

  const userListUl = document.querySelector('.user-list')
    
  const li = document.createElement('li')
  li.textContent = userInput
  
  userListUl.append(li)
  
  e.target.reset()

}
