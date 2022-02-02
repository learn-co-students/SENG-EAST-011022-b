function Form() {
  return (
    <div className='form-div'>
      <form id="new-card-form" >
        <label htmlFor="card-title">Title</label>
        <input type="text" placeholder="Create Title" />
        <label htmlFor="card-price">Price</label>
        <input type="text" placeholder="Add price" />
        <label htmlFor="card-image">Image</label>
        <input type="text" placeholder="Add Image URL" />
        <input id="create-btn" type="submit" value="Create Card" />
      </form>
    </div>
  );
}

export default Form;