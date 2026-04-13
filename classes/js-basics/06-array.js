const carriage = ["Veer", "Ayush", "Ravi"];
const emptyCarriage = [];

const threeEmptySeats = Array(3);
// console.log(threeEmptySeats.length);
const passenger = Array("Veer", "Dev", "Rahul");

const singlePassenger = Array.of(3);
// console.log(singlePassenger);

const trainCode = Array.of("Coal");
// console.log(trainCode)

const tempTrain = ["A", "B", "C", "D", "E", "F", "G"];
// tempTrain.length = 3;
// console.log(tempTrain);
// tempTrain.length = 5;
// console.log(tempTrain);
// tempTrain.length = 9;
// console.log(tempTrain);


// push , pop, shift, unshift, splice
// concat, slice , flat(React, redux);
// Searching -> indexOf, includes, find, findIndex

const trainCopy = tempTrain.slice()
// console.log(trainCopy)

console.log(typeof []);
console.log(Array.isArray([]))
console.log(Array.isArray("Rahul"))


//key points
// 1. [] Array(4)
// 2. array are 0 based
// 3. Mutating methods: push pop, shift, unshift, splice
// 4. Non Mutating: concat, slice, flat, flatmap [1, 2, 3, [5, 6]]
// 5. Searching includes
// 6. Array.isArray()
