console.log("YESSSSSS");

// Find all users with more than 1 pet
// Find anyone pets who are dogs
// print out all pet names 

let arrayOfObjects = [
  {
    name: "Greg", 
    city: "Providence",
    age: 20,
    pets: [
      {name: "Chuck", animal: "Chipmunk"}
    ]
  },
  {
    name: "Kim", 
    city: "Westport",
    age: 25,
    pets: [
     {name: "Slim", animal: "Snake"},
      {name: "Foxy", animal: "Dog"},
    ]
  },
  {
    name: "Eva", 
    city: "Honolulu",
    age: 30,
    pets: [
      {name: "Dumbo", animal: "Eliphant"}
    ]
  },
  {
    name: "Amelia", 
    city: "Bozeman",
    age: 35,
    pets: [
      {name: "Lala", animal: "Lion"},
      {name: "Tara", animal: "Tiger"},
    ]
  },
  {
    name: "Riley", 
    city: "San Diego",
    age: 60,
    pets: [
      {name: "Night", animal: "Owl"},
     {name: "Sam", animal: "Dog"},
    ]
  }
]

function findAllWithMoreThanOnePet(){
  const plus2Pets =  arrayOfObjects.filter((personObj) => {
    return personObj.pets.length >= 2 
  })

  return plus2Pets.map(personObj => personObj.name)

}


// function findUserByKey(key){
// // key = name

//   let person = {
//     name: "Greg", 
//     "city": "Providence",
//     age: 20,
//     pets: [
//       {name: "Chuck", animal: "Chipmunk"}
//     ]
//   }
//   console.log("test");
//   // person.key
//   // person[key]

// }

// findUserByKey(name)




