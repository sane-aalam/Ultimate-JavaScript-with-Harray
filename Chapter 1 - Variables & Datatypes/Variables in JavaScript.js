/* 
*! IMP NOTE
Computer memory used to be much smaller, and people tended to
use groups of 8 or 16 bits to represent their numbers. It was easy to
accidentally overflow such small numbers—to end up with a number
that did not fit into the given number of bits. Today, even computers
that fit in your pocket have plenty of memory, so you are free to use
64-bit chunks, and you need to worry about overflow only when dealing
with truly astronomical numbers.
*/

var HarryKidneysNumber = "E20002101";
var HarryKidneysHealthy = true;
var HarryFuturePlans = undefined;
var HarryYoutubeChannelName = "codewithharray";
var HarrayYoutubePassword = "codewithharray@874";
// update the password
HarrayYoutubePassword = "codewithharray@123";

let HosptitalTemplateName = "DR A.K kumar";
let HosptitalTotalRooms = 31;
let HosptitalTotalDoctors = 19;
let HosptitalTotalNurse = 86;
let TotalNumberOfPeoples = 1991;
let NumberOfHealthyPeoples = 1671;
let NumberOfUnhealthyPeoples = TotalNumberOfPeoples - NumberOfHealthyPeoples;
let NeedVitaminsCapsules = "retnodol-ad";

console.log(NumberOfUnhealthyPeoples);
console.log(HosptitalTemplateName);

// Not possible to re-declare the same name variable again
// Bluiding Large Application make sure
// let NumberOfUnhealthyPeoples;

// snake_case -> you can also use it
// camel_case -> mostly used into javascript
let number_of_new_peoples_admit = 101;
let number_of_new_peoples_fever = number_of_new_peoples_admit / 2;
let number_of_death_peoples =
  TotalNumberOfPeoples - number_of_new_peoples_fever;

// Arrays
let DoctorsMbbsLists = ["Ak Agarwal", "Deep Kumar", "Aman Khan"];
let firstDoctor = DoctorsMbbsLists[0];
let secondDoctor = DoctorsMbbsLists[1];
let thridDoctor = DoctorsMbbsLists[2];

// DOM
let body = document.getElementById("body");
for (
  let currentIndex = 0;
  currentIndex < DoctorsMbbsLists.length;
  currentIndex++
) {
  let newTemplate = document.createElement("div");
  newTemplate.innerHTML = DoctorsMbbsLists[currentIndex];
  body.appendChild(newTemplate);
}


// Strings

var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);
// → Hello Ayda
