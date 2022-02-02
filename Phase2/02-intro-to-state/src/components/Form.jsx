function Form() {
  return (
    <div class='form-div'>
      <form id="new-card-form" >
        <label for="card-title">Title</label>
        <input type="text" placeholder="Create Title" />
        <label for="card-price">Price</label>
        <input type="text" placeholder="Add price" />
        <label for="card-image">Image</label>
        <input type="text" placeholder="Add Image URL" />
        <input id="create-btn" type="submit" value="Create Card" />
      </form>
    </div>
  );
}

export default Form;