//TASK1
    
    var currentDate = new Date();

    document.write("Current date and time: " + currentDate);

    //TASK2
  // Get the current month
  var currentMonth = new Date().toLocaleString('default', { month: 'long' });

  // Alert the current month
  alert("Current month: " + currentMonth);
 //task3

  // Get the current day
  var currentDay = new Date().toLocaleString('default', { weekday: 'short' });

  // Alert the first 3 letters of the current day
  alert("Current day: " + currentDay);

  //task4
  // Get the current day
  var currentDay = new Date().toLocaleString('default', { weekday: 'long' });

  // Check if it's Saturday or Sunday
  if (currentDay === 'Saturday' || currentDay === 'Sunday') {
    document.write("It's Fun day");
  }

  //task5
  var currentDate = new Date();
var dayOfMonth = currentDate.getDate();

if (dayOfMonth < 16) {
  console.log("First fifteen days of the month");
} else {
  console.log("Last days of the month");
}
//tassk6
var now = new Date();
var minutesSinceMidnight = now.getTime() / (1000 * 60);

console.log("Minutes since midnight, Jan. 1, 1970: " + minutesSinceMidnight);

//task7
var now = new Date();
var hours = now.getHours();

if (hours < 12) {
  console.log("It's AM");
} else {
  console.log("It's PM");
}

//task8
var laterDate = new Date(2020, 11, 31);

console.log("Last day of the last month of 2020: " + laterDate);
//task9
var startDate = new Date(2015, 5, 18);
var currentDate = new Date();
var timeDiff = currentDate.getTime() - startDate.getTime();
var daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

alert("Number of days past since 1st Ramadan: " + daysPassed);
//task10
var referenceDate = new Date("January 1, 2015");
var currentDate = new Date();
var timeDiff = currentDate.getTime() - referenceDate.getTime();
var secondsElapsed = Math.floor(timeDiff / 1000);

document.write("Seconds elapsed since the reference date: " + secondsElapsed);
 //task11
 var currentDate = new Date();
var hours = currentDate.getHours();

currentDate.setHours(hours + 1);

console.log("Reset date object: " + currentDate);

//task12
var currentDate = new Date();
var year = currentDate.getFullYear();

currentDate.setFullYear(year - 100);

alert("Date reset to 100 years back: " + currentDate);

//task13
var age = prompt("Please enter your age:");
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var birthYear = currentYear - age;

document.write("Your birth year is: " + birthYear);

//task14
var customerName = "John Doe";
var currentMonth = "June";
var numberOfUnits = 300;
var chargesPerUnit = 10;
var latePaymentSurcharge = 50;

var netAmountPayable = numberOfUnits * chargesPerUnit;
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

document.write("<h2>K-Electric Bill</h2>");
document.write("<p><strong>Customer Name:</strong> " + customerName + "</p>");
document.write("<p><strong>Current Month:</strong> " + currentMonth + "</p>");
document.write("<p><strong>Number of Units:</strong> " + numberOfUnits + "</p>");
document.write("<p><strong>Charges per Unit:</strong> " + chargesPerUnit + "</p>");
document.write("<p><strong>Net Amount Payable (within Due Date):</strong> " + netAmountPayable.toFixed(2) + "</p>");
document.write("<p><strong>Late Payment Surcharge:</strong> " + latePaymentSurcharge.toFixed(2) + "</p>");
document.write("<p><strong>Gross Amount Payable (after Due Date):</strong> " + grossAmountPayable.toFixed(2) + "</p>");

  