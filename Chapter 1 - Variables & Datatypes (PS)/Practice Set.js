// Q1- create a variable of type string and try to add a number it
// Q2- use typeof operators in javascript in datatypes of all types
// Q3- create a const object in javascript can you change it to hold a number later?
// Q4- Try to add a new key into object
// Q5- write a javascript program to create a word-meaning dictionary of 5 words

let IslandsPresentInCity = "New Delhi";
console.log(IslandsPresentInCity);
console.log(IslandsPresentInCity == "New Delhi");
console.log(typeof IslandsPresentInCity);

// → Number
let numberOfHttpRequest = 101;
// → String
let IslandsName = "the new york city!";
// → Boolean
let isIslandsSafe = true;
// → Null (nothing)
let isThisRoomEmpty = null;
// → Undefined
let numberOfHttpRequestPending;
// → Symbol
let id = Symbol("user"); // Symbol
// → bigInt - store large numbers (put n into last)
let bigNumber = 12345678901234567890n; // BigInt

console.log(typeof numberOfHttpRequest);
console.log(typeof IslandsName);
console.log(typeof isThisRoomEmpty);
console.log(typeof numberOfHttpRequest);
console.log(typeof bigNumber);
console.log(typeof id);

// Q3 →
const NumberOfHTTPRequests = {
  hide_data_urls: 101,
  hide_data_urls_path: "http/:google.com",
  hide_data_request: 101,
};

// not changed
numberOfHttpRequest.hide_data_request = 1919191;
console.log(NumberOfHTTPRequests);

// Q4 → Try to add a new key into object
NumberOfHTTPRequests.new_data_request = 10101;
NumberOfHTTPRequests["hide_extension_urls"] = "100 requests";
console.log(NumberOfHTTPRequests);

// Q5 → write a javascript program to create a word-meaning dictionary of 5 words

var dict = {
    Name: "Eric",
    Age : 23,
    Job: "Freelancer",
    Skills : "JavaScript",
    TecSkills : "C++"
};

// The new object method can also be used but keeping readability in mind, I have suggested the above method.
// Be aware of your naming convention, I would recommend using a common style for all your keys. This would help access them easily