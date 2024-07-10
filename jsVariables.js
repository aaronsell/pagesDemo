// Use the 'var' or the 'let' keyword to declare a variable

var firstName = "Jimmy";
let number = 10;

console.log("Here are some variables: ")

// Use backticks (`) to display the output of variables
console.log(`firstName = ${firstName}`);
console.log(`number = ${number}`);

// Declare a few more variables
let age = 39;
let hourlyWage = 11.99;

// Use the variables as a part of calculations
let dailyWage = hourlyWage * 8;
let weeklyWage = dailyWage * 5;

// Update the value of the firstName variable
firstName = "Aaron";

// Output the values of the variables
console.log(`Did you know that ${firstName} is ${age} years old and makes $${weeklyWage} per week?`);

// Make constants using the 'const' keyword
const pi = 3.14159265358979;
console.log(`The value of pi is approximately ${pi}, and always will be!`);

// JavaScript Objects work a lot like Python dictionaries
let homer = {
        name: "Homer Jay Simpson",
        age: 39
  };
  
  let marge = {
        name: "Marjorie Jacqueline Simpson",
        age: 34
  };
  
  let bart = {
        name: "Bartholomew JoJo Simpson",
        age: 10
  };
  
  let lisa = {
        name: "Lisa Marie Simpson",
        age: 10
  };
  
  let maggie = {
        name: "Margaret Simpson",
        age: 1
  };

// Display the information for one of the JSONs (JS Objects)
console.log(homer);

// Arrays in JS are very similar to python lists
let myArray = []; // Makes an empty array

// Use the .push() method to add info to the arrays
myArray.push('Alpha');
myArray.push('Beta');
myArray.push('Gamma');
myArray.push('Delta');
myArray.push('Epsilon');

// Display the entire array
console.log(myArray);

// Use a number index to access an item from the array
console.log(myArray[2]); // prints out 'Gamma'

// Use slicing to display elements starting from and up to 
//          but not including another index
console.log(myArray.slice(1, 3)); // prints 'Beta' then 'Gamma'

// Make an array from the Simpsons JS Objects
var simpsons = [homer, marge, bart, lisa, maggie];

// Display the array of JS Objects
console.log(simpsons);

// JSONs are collections of key/value pairs
let charlotte = {
    name: "Charlotte",
    state: "North Carolina",
    nickname: "Queen City"
};

// Display the city's name
console.log(charlotte["name"]);

// Display the state using . syntax
console.log(charlotte.state); // same as charlote['state']

// Add a property
charlotte.population = 897700 // Makes a key/value pair named 'population'

// Display the array with the updated key/value pair
console.log(charlotte);