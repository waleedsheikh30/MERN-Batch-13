let age = 20;


// if....
if (age >= 18) {
    console.log("You are an adult");
}


// if-else
let number = 5;
if (number % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}


//if, else-if 
let marks = 75;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 80) {
  console.log("Grade B");
} else if (marks >= 70) {
  console.log("Grade C");
} else {
  console.log("Fail");
}


// nested if......
let username = "waleed";
let password = "1234";

if (username === "waleed") {
  if (password === "1234") {
    console.log("Login successful!");
  } else {
    console.log("Wrong password");
  }
} else {
  console.log("User not found");
}


// Switch case
// switch(value) {
//   case option1:
//     // code
//     break;
//   case option2:
//     // code
//     break;
//   default:
//     // default code
// }


let day = 3;
switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
