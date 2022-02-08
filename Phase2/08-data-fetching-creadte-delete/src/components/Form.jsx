import {useState} from 'react'

function Form({addNewWinterItem}) {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [imgUrl, setImgUrl] = useState("")

  // function handleChangeTitle(e) {
  //   const currentTitleInput = e.target.value
  //   setTitle(currentTitleInput)
  // }

  function handleChangePrice(e) {
    const currentPriceInput = e.target.value
    setPrice(currentPriceInput)
  }

  function handleChangeImg(e) {
    const currentImgInput = e.target.value
    setImgUrl(currentImgInput)
  }

  function handleSubmit(e){
    e.preventDefault()
    // const winterObj = {
    //   title: title, 
    //   price: price, 
    //   imgUrl: imgUrl
    // }
    const winterObj = {title, price, imgUrl}

    // addNewWinterItem(winterObj)
    addNewItemToDatabase(winterObj)
  }

  function addNewItemToDatabase(winterObj){
    fetch('http://localhost:3000/winterThings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(winterObj),
    })
    .then(response => response.json())
    .then(newWinterItem =>  addNewWinterItem(newWinterItem))
  }


  return (
    <div className='form-div'>
      <form id="new-card-form" onSubmit={handleSubmit} >
        <label htmlFor="card-title">Title</label>
        <input type="text" placeholder="Create Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <label htmlFor="card-price">Price</label>
        <input type="number" placeholder="Add price" value={price} onChange={handleChangePrice}/>
        <label htmlFor="card-image">Image</label>
        <input type="text" placeholder="Add Image URL" value={imgUrl} onChange={handleChangeImg}/>
        <input id="create-btn" type="submit" value="Create Card" />
      </form>
    </div>
  );
}

export default Form;