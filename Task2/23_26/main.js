//Task1
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

console.log(Math.pow(10, 5)); // 100000
console.log(+"100000"); // 100000
console.log(1000 * 100); // 100000
console.log(200000/2); // 100000
console.log((50 + 50) * 1000); // 100000
console.log(1e5); // 100000
console.log(10 ** 5); // 100000



//Task2
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

//task3
console.log(Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER * 16);

//Task4

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

//Task5
let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2


//Task6
let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(flt - (flt % (true + true))); // 10
console.log(+flt.toFixed(0)); // 10

//Task7
console.log(Math.floor(Math.random() * 5));