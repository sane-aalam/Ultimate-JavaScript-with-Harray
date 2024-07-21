/*
“And my heart glows bright red under my filmy, translucent 
skin and they have to administer 10cc of JavaScript to get me
to come back. (I respond well to toxins in the blood.) Man,
that stuff will kick the peaches right out your gills!”
*/

let mood = "light";
console.log(mood);
// → light
mood = "dark";
console.log(mood);
// → dark

// In JavaScript, there are 7 primitive data types:
// Number: Represents both integer and floating-point numbers.
// String: Represents a sequence of characters enclosed in single or double quotes.
// Boolean: Represents a logical value, either true or false.
// Null: Represents the intentional absence of any object value.
// Undefined: Represents a variable that has been declared but not assigned a value.
// Symbol (ES6): Represents a unique and immutable value.
// BigInt (ES2020): Represents integers with arbitrary precision.
// Key points about primitive data types:
// They are immutable, meaning their values cannot be changed once created.
// They are passed by value, meaning that when you pass a primitive value to a function, a copy of the value is created.

// → Number
let numberOfIslands = 10;
let numberOfHttpRequest = 101;
let numberOfStudents = 1001;
let numberOfDataBase = 10101;

// → String
let IslandsName = "the new york city!";
let IslandsPresentInCity = "NEW YORK";
let StudentName = "Ali";

// → Boolean
let isIslandsSafe = true;
IslandsName = false;
let isStudentPass = true;
isStudentPass = false;
let isPossibleToGetJob = true;

// → Null (nothing)
let isThisRoomEmpty = null;

// → Undefined
let numberOfHttpRequestPending;
// don't do this
let number_http_request_pending = undefined;

// → Symbol
let id = Symbol("user"); // Symbol
let student_id = Symbol("user");
console.log(id);
console.log(student_id);

// → bigInt - store large numbers (put n into last)
let bigNumber = 12345678901234567890n; // BigInt

// → 