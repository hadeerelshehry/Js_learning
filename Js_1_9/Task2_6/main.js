let user = document.getElementById("name");
user.style.color = "blue";
user.style.fontSize = "80px";
user.style.fontWeight = "bold";
user.style.textAlign = "center";
user.style.fontFamily = "Arial";



//Task3
console.log("%cComputer %cScience %cStudent",
    "color: red; font-size: 40px;",
    "color: green; font-size: 40px; font-weight: bold;",
    "color: white; font-size: 40px; background-color:blue;"
);


//Task4
console.group("Group1");
console.log("Hadeer");
console.log("Elshehry");
console.group("details");
console.log("id:335");
console.log("age:20");
console.group("about")
console.log("education: CS");
console.log("level:2");
console.groupEnd();
console.group("Group2");
console.log("message one");
console.log("message two")
console.groupEnd();


//Task5
let arr = ["Hadeer", "elshehry", "salme"];
console.table(arr);


//Task6
console.log = function () { }; //Overriding Function
console.write = function () { };

console.log("Iam In Console");
document.write("Iam In Page");

