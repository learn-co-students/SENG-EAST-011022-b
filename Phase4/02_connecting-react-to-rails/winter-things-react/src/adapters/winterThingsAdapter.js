const winterThingsAdapter = {
  getAll: () =>  fetch('http://localhost:3000/winter_items').then(res => res.json()),
  deleteItem: (id) =>  fetch(`http://localhost:3000/winter_items/${id}`, {method: "DELETE"})
}


export default winterThingsAdapter