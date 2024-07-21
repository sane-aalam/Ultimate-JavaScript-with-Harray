/**
 * ! Rules of naming variables
- Name your variables based on the terms of the subject area, so that the variable name clearly describes its purpose.
Create variable names by deleting spaces that separate the words. ...
Do not begin variable names with an underscore.
Do not use variable names that consist of a single character.
*/

var youtuberName = "Harish Khan";
let youtubeChannelName = "Codewithharray";
const youtubeChannelPassword = "codewithharray@1231"; // not changed once you have define

youtubeName = "Harray Bhai!";
youtubeChannelName = "codwithharray Hindi";
youtubeChannelPassword = "codwithharray@1244";

console.table(youtubeName, youtubeChannelName, youtubeChannelPassword); 

/*
! Question-1 What is the difference between VAR and let and const?
Variables declared with var can be reassigned. Variables declared with let can be reassigned. Variables declared with const cannot be reassigned. Variables declared with var are hoisted, which means they can be accessed before they are declared

! Question-2 Why use var instead of const?
Use var for function-level scope, mainly when dealing with older code or specific scoping needs

! Questions-3 Why is const better than let?
We use let when we know that the value of the variable may change over time. For example, when we are working with a variable inside a loop, or when we want to update the value of a variable based on user input. On the other hand, we use const when we want to create a variable that should not be reassigned.


*/