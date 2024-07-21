// → Get the number of id is present into the fakeAPI

const fakeAPI = {
  users: [{ id: 1, name: "John Doe", email: "john@example.com" }],
  posts: [{ id: 1, title: "Hello World", content: "This is my first post." }],
};
var totalID = fakeAPI.users[0].id + fakeAPI.posts[0].id;
console.log(totalID);

// → NumberOfKidneys (Healthy or unHealthy)

let NumberOfKidneys = 188;
let NumberOfHealthyKidneys = 99;
let NumberOfUnHealthyKidneys = NumberOfKidneys - NumberOfHealthyKidneys;
let NeedVitaminsToMakeHealthy = NumberOfHealthyKidneys/2;
console.log(NumberOfUnHealthyKidneys);
console.log(NeedVitaminsToMakeHealthy); 

// → Comparison
let AIR_2021 = 11;
let AIR_2022 = 12;
console.log(AIR_2021 == AIR_2022)
console.log(AIR_2021 <= AIR_2022)
console.log(AIR_2021 >= AIR_2022)
console.log(AIR_2021 < AIR_2022)
console.log(AIR_2021 === AIR_2022)
