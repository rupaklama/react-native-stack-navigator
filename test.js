// var vs const / let
// var has a function scope where
// const / let has scope within closet {}
function var_type() {
  if (true) {
    const myVar = 'hello';
    console.log(myVar);
  }
}

var_type();

// callback function - is a function pass as argument to another function to execute later

// map function creates a new array
// array.map
const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(function (value, index, array) {
  return value * 2;
});

console.log(arr)
console.log(newArr);

// Reduce comes with some terminology such as reducer & accumulator. 
// The accumulator is the value that we end with and the reducer is what action we will perform in order to 
// get to one value.
// You must remember that a reducer will only return one value and one value only hence the name reduce.

// arr.reduce(callback, initialValue) - 
// this method returns only one new value, not changing initial value
const arr2 = [6, 7, 8, 9, 10]

const initialValue = 0 

const newArr2 = arr2.reduce(function(accumulator, value) {
  return accumulator + value
}, initialValue) // second arg - initial value is 0

console.log(arr2)
console.log(newArr2)

// object destructuring
const person = {
  name: "Indira",
  age: 33,
  hobby: "TikTok"
}

// assigning to a variables
// const name = person.name
// const age = person.age
// const hobby = person.hobby

// destructuring, same as above
// const { name, age, hobby } = person;

// spread operator
const { age, ...newObj } = person;
console.log(age, newObj)

// array destructuring
const elements = ['this', 'is', 'an', 'array']

// to get values
const firstElem = elements[0]
const secondElem = elements[1]

// destructuring
const [ first, second, , fourth] = elements
console.log(fourth)


// FUNCTION EXPRESSION is assigning a func to a variable.