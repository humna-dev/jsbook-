// chapter7
// task1
var cityName = prompt("Enter the city name:");
if (cityName.toLowerCase() === "karachi") {
  document.write("<h2>Welcome to karachi!</h2>");
}
// task2
var gender = prompt("Enter your gender:");
if (gender.toLowerCase() === "male") {
  document.write("<h2>Hello Sir how may i help you .</h2>");
} else if (gender.toLowerCase() === "female") {
  document.write("<h2>Hello Ma'am how may i help you.</h2>");
} else {
  document.write("<h2> Hello how may i help you!</h2>");
}
// task3
var signalColor = prompt("Enter the color of the traffic signal:");
signalColor = signalColor.toLowerCase();
if (signalColor === "red") {
  document.write("<h3>Stop</h3>");
} else if (signalColor === "yellow") {
  document.write("<h3> Ready to go </h3>");
} else if (signalColor === "green") {
  document.write("<h3>Move now</h3>");
} else {
  document.write("<h3>Invalid color</h3>");
}
// task4
var remainingFuel = +prompt(
  "Enter the remaining fuel in your car (in liters):"
);
if (remainingFuel < 0.25) {
  document.write("<h2>Please refill the fuel.</h2>");
} else {
  document.write("<h3>Fuel is sufficient. safe journey!</h3>");
}
// task5a
var a = 8;
if (++a === 9) {
  alert("given condition 'a' is true");
}
// task5b
var b = 77;
if (b++ === 78) {
  alert("given condition 'b' is true");
}
// task5c
var c = 50;
if (c++ === 51) {
  alert("condition 1 is true");
}
if (c === 7) {
  alert("condition 2 is true");
}
if (++c < 8) {
  alert("condition 3 is true");
}
if (c === 8) {
  alert("condition 4 is true");
}
// task5d
var materialCost = 55000;
var laborCost = 7000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The equal cost is .............");
}
// task5e
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}
// task5f
if ("car" < "cat") {
  alert("car is smaller than cat");
}
// task6
var subject1Marks = parseFloat(prompt("Enter marks  in subject 1:"));
var subject2Marks = parseFloat(prompt("Enter marks  in subject 2:"));
var subject3Marks = parseFloat(prompt("Enter marks  in subject 3:"));
var totalMarks = parseFloat(prompt("Enter total marks:"));
var totalMarks = subject1Marks + subject2Marks + subject3Marks;
var percentage = (totalMarks / totalMarks) * 100;
var grade;
if (percentage >= 80) {
  grade = "A+";
} else if (percentage >= 70) {
  grade = "A";
} else if (percentage >= 60) {
  grade = "B";
} else if (percentage >= 50) {
  grade = "C";
} else if (percentage >= 40) {
  grade = "D";
} else {
  grade = "Fail";
}
document.write("<h3>Percentage: " + percentage.toFixed(2) + "%</h3>");
document.write("<h3>Grade: " + grade + "</h3>");
// task7
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
if (userGuess === secretNumber) {
  document.write("<h3> yahooo ! Correct answer.</h3>");
} else if (userGuess === secretNumber + 1) {
  document.write("<h3>Close  to the correct answer.</h3>");
} else {
  document.write(
    "<h3>Sorry, incorrect guess. The secret number was " +
      secretNumber +
      ".</h3>"
  );
}
// task8
var number = parseInt(prompt("Enter a number:"));
if (number % 3 === 0) {
  document.write("<h3>The number " + number + " is divisible by 3.</h3>");
} else {
  document.write("<h3>The number " + number + " is not divisible by 3.</h3>");
}
//  task9
var number = +prompt("Enter a number:");
if (number % 2 === 0) {
  document.write("<h3>The number " + number + " is even.</h3>");
} else {
  document.write("<h3>The number " + number + " is odd.</h3>");
}
// task10
var temperature = +prompt("Enter the temperature in degrees Celsius:");
if (temperature > 40) {
  document.write("<h3>It is too hot outside.</h3>");
} else if (temperature > 30) {
  document.write("<h3>The weather today is normal.</h3>");
} else if (temperature > 20) {
  document.write("<h3>Today's weather is cool.</h3>");
} else if (temperature > 10) {
  document.write("<h3>OMG! Today's weather is so cool.</h3>");
} else {
  document.write("<h3>It is extremely cold outside.</h3>");
}
// task 11
 // Prompt the user to enter the first number
 var firstNumber = parseFloat(prompt("Enter the first number:"));

 // Prompt the user to enter the second number
 var secondNumber = parseFloat(prompt("Enter the second number:"));

 // Prompt the user to enter the operation
 var operation = prompt("Enter the operation (+, -, *, /, %):");

 // Variable to store the calculated result
 var result;

 // Check the operation and perform the corresponding calculation
 if (operation === "+") {
 result = firstNumber + secondNumber;
 } else if (operation === "-") {
 result = firstNumber - secondNumber;
 } else if (operation === "*") {
 result = firstNumber * secondNumber;
 } else if (operation === "/") {
 result = firstNumber / secondNumber;
 } else if (operation === "%") {
 result = firstNumber % secondNumber;
 } else {
 document.write("<h3>Invalid operation.</h3>");
 // Exit the program if the operation is invalid
 throw new Error("Invalid operation.");
 }

 // Display the calculated result to the user
 document.write("<h3>The calculated result is: " + result + "</h3>");