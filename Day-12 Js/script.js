// let num = parseInt(prompt("Enter a num"));

// What is Function?
// Building block of code that performs a specific task
// why function is needed?
// bcz of reusablility, avoid code repetetion

// Funtion types:
// Function Declaration
// Function expression
// Arrow Function (ES6 modal)
// Functions with parametres & return values

// Function Declaration
function greet() {
    console.log("Welcome Students");
    
}

greet();

// Functions with parametres
function user(name) {
    console.log("Hello. " + name + "!");
    
}

user("Waleed");
user("Ali");


// Functions with return values , function expression
const multiply = function (x, y) {
    return x * y;
}

console.log(multiply(7, 9));


// Arrow Function (ES6 modal) -> ecma script 6 modal (js functions version)
const add = (a,b) => a + b;
console.log(add(3, 6));


// Function with default parametres
function hello(name = "Guest") {
    console.log("Welcome. " + name + "!");
    
}

hello();
hello("Waleed");


// Function calling another function
function square(num) {
    return num * num;
}

function print(n) {
    console.log("Sqauare of " + n + "is" + square(n));
}

print(3);