//Task1
let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(false).toLowerCase()); // e
console.log(userName.slice(false, true).toLowerCase()); // e
console.log(userName.substring(false, true).toLowerCase()); // e
console.log(userName.substr(false, true).toLowerCase()); // e
console.log(userName[0].toLowerCase().repeat(3)); // eee


//Task2
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.toLowerCase().includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True