// Q1 - Number of Islands[Safe or not safe]

let NumberOfIslands = 19;
if (NumberOfIslands == 19) {
  console.log("City is safe!");
} else if (NumberOfIslands <= 10 && NumberOfIslands < 19) {
  console.log("City is gonna to safe state");
} else {
  console.log("city is not safe!");
}

// Q2 →  Linear Search
let container = [11, 12, 14, 15, 16, 19, 20];
let targetValue = 19;

for (let currIndex = 0; currIndex < container.length; currIndex++) {
  if (container[currIndex] == targetValue) {
    console.log("Present!");
  }
}

// Q2 →  Data Present into the Object or Not

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["reading", "traveling"],
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  },
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

if (person["address"]["street"] == "123 Main St") {
  console.log("123 Main St");
} else {
  console.log("error 404");
}

person.fullName(); // Evoke the function
