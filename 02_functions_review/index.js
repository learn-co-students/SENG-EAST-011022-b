

// Function Delaration
function takesThreeArgs(arg1, arg2, arg3){
  console.log(arg1);
  console.log(arg2);
  console.log(arg3);
}
takesThreeArgs("hello", 8, [1,2,3])

// Arrow Function
const takesTwoArgs = (arg1, arg2) => {
  console.log("inside two");
}


// Function Expression
const takesOneArg = function(arg1) {
  return  arg1 / 1000
}


function addThree(num){
  return num + 3
}


// addThree(10)
// addThree(takesOneArg())


let names = ["Greg", "Robin", "Wade", "Turner", "Forrest"]


// names.forEach((name) => "hello") //=> always returns undefined 
let mapNames = names.map((name) => `hello ${name}`) // => always returns an array of the same exact size as the original with elements modified
let filterNames = names.filter((name) => name.length > 4)
let findNames = names.find((name) => name.length > 4)


// names.forEach((name, i, array) => {
//   console.log(name)
//   console.log(i)
//   console.log(array)
// })
// names.map((name, i, array) => {
//   console.log(name)
//   console.log(i)
//   console.log(array)
// })





