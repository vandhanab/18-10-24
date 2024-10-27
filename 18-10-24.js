// ARRAY METHODS 
// Initial array
let numbers = [1, 2, 3, 4, 5];

// 1. push() - Adds elements to the end of an array
numbers.push(6);
console.log("After push:", numbers); 

// 2. pop() - Removes the last element from an array
numbers.pop();
console.log("After pop:", numbers); 

// 3. shift() - Removes the first element from an array
numbers.shift();
console.log("After shift:", numbers); 

// 4. unshift() - Adds elements to the beginning of an array
numbers.unshift(1);
console.log("After unshift:", numbers);

// 5. map() - Creates a new array by applying a function to each element
let squares = numbers.map(num => num * num);
console.log("Squares using map:", squares); 

// 6. filter() - Creates a new array with elements that pass a condition
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers using filter:", evenNumbers); 

// 7. reduce() - Reduces the array to a single value
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum using reduce:", sum); 

// 8. find() - Returns the first element that matches a condition
let firstEven = numbers.find(num => num % 2 === 0);
console.log("First even number using find:", firstEven); 

// 9. findIndex() - Returns the index of the first element that matches a condition
let firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
console.log("Index of first even number using findIndex:", firstEvenIndex); 

// 10. sort() - Sorts the array in place
let sorted = [...numbers].sort((a, b) => b - a);
console.log("Sorted in descending order using sort:", sorted); 

// 11. reverse() - Reverses the array in place
let reversed = [...numbers].reverse();
console.log("Reversed array using reverse:", reversed); 

// 12. concat() - Combines two or more arrays
let moreNumbers = [6, 7, 8];
let combined = numbers.concat(moreNumbers);
console.log("Combined using concat:", combined); 

// 13. slice() - Returns a shallow copy of a portion of an array
let sliced = numbers.slice(1, 3);
console.log("Sliced from index 1 to 3:", sliced); 

// 14. splice() - Adds/removes elements in an array
numbers.splice(2, 0, 99);
console.log("After splice:", numbers); 

// 15. includes() - Checks if an array contains a certain element
let hasFour = numbers.includes(4);
console.log("Includes 4:", hasFour); 

// 16. indexOf() - Returns the index of a specified element, or -1 if not found
let index = numbers.indexOf(99);
console.log("Index of 99:", index); 

// 17. every() - Tests if all elements in the array pass a condition
let allLessThanTen = numbers.every(num => num < 10);
console.log("All less than 10:", allLessThanTen); 

// 18. some() - Tests if at least one element in the array passes a condition
let someEven = numbers.some(num => num % 2 === 0);
console.log("Some numbers are even:", someEven); 

// OBJECT METHODS 
let personObj = { // renamed from 'Person' to avoid conflict
    name: "Srigna",
    age: 23,
    location: "Telangana",
    hobbies: ["traveling", "music"],
    isEmployed: true
};

personObj.age = 24;
delete personObj.location;
personObj.hobbies.push("reading");

let entries = Object.entries(personObj);
let keys = Object.keys(personObj);
let values = Object.values(personObj);
let hasProperty = personObj.hasOwnProperty("name");
let isFrozen = Object.isFrozen(personObj);
let isSealed = Object.isSealed(personObj);

Object.freeze(personObj);
Object.seal(personObj);

let copy = Object.assign({}, personObj);
let merged = Object.assign({ city: "Hyderabad" }, personObj);

console.log(personObj);
console.log(entries);
console.log(keys);
console.log(values);
console.log(hasProperty);
console.log(isFrozen);
console.log(isSealed);
console.log(copy);
console.log(merged);

// FUNCTIONS 
function greetPerson(name) { // renamed the function to avoid conflict with object
    console.log("Hello, " + name + "!");
}

greetPerson("Ahalya");

function add(a, b) {
    return a + b;
}

let sumValue = add(5, 3); 
console.log(sumValue); 

function wish(name = "Guest") {
    console.log("Hello, " + name + "!");
}

wish();           
wish("Srigna");
