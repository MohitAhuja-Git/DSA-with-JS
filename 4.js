// Pattern Programing------------------------------------------------------>
// console.log("Hello World!")// This is only Print in Console

// process.stdout.write("Hello ")--------->|
// process.stdout.write("World") --------->|This Function Used in Node to Print

// let a= prompt("Enter")// This Prompt is only work in brouser not node env


// let prompt =require('prompt-sync')();------------------------------->
// let a= prompt("Enter")                ------------------------------->for use prompt in node env
// process.stdout.write(a)              ------------------------------->

// console.log("* * * * * *")
// console.log("* * * * *")
// console.log("* * *")
// console.log("* *")
// console.log("*")

let prompt = require("prompt-sync")();
let n= Number(prompt("Enter a Number = "))
for (let i = 1; i <=n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write('X ');     
    }
    console.log()
}




// process.stdout.write("*")