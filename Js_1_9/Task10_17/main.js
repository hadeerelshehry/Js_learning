//Task1
let numOne = 10;
let numTwo = 20;

let conc = numOne + "" + numTwo;
console.log(conc);
console.log(typeof (conc));

let litConc = `${numOne}${numTwo}`;
console.log(litConc);
console.log(typeof (litConc));

console.log(numOne + "\n" + numTwo);
console.log(`${numOne}
${numTwo}`);


//Task2
console.log(Elzero.innerHTML);
console.log(typeof Elzero); 

//Task3
console.log(
  "I'm In\n" +
  "\\\n" +
  "Love \\ \"\"\" '''\n" +
  "++ With ++\n" +
  "\\\"\"\"\\\"\"\"\n" +
  "\"\"JavaScript\"\""
);


//Task4
let a = 21;
let b = 20;
let conct =`_${a}${b}`;
console.log(conct);
console.log(`_${a}${conct.repeat(3)}_${b}_`);