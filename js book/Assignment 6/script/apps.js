// chapter6
// task1
var num = 9;
document.write("the value is :;" + num);
var num = ++num;
document.write("<br>the value of ++num is :" + num);
var num = num++;
document.write(" <br>value of ++num is:" + num);
var num = --num;
document.write(" <br>value of --num is:" + num);
var num = num--;
document.write(" <br>value of num-- is:" + num);
// task2
var a = 25;
var b = 88;
document.write(+--a + "<br>");
document.write(+--a - --b + "<br>");
document.write(--a - --b + ++b + "<br>");
document.write(--a - --b + ++b + b + "<br>");
var result = --a - --b + ++b + b--;
document.write(result);
document.write("<br>a is" + a);
document.write("<br>b is" + b);
document.write("<br>result is" + result);
// task3
var enter = prompt("enter your Name");
var msg = "welcome to our page!";
alert(msg);
// task4 no assignment
// task5
var num = parseInt(prompt("enter number you want to print "));
if (isNaN(num)) {
  number = 8;
}
var table = "";
for (var i = 1; i <= 10; i++) {
  table += num + "x" + i + "=" + num * i + "<br>";
}
document.write(table);
// task6
var name1 = prompt("enter subject name one ");
var name2 = prompt("enter subject name two ");
var name3 = prompt("enter subject name three ");
var total = 100;
var grand_total = 300;
var obtained_marks1 = parseInt(prompt("Enter 1st subject marks you get "));
var obtained_marks2 = parseInt(prompt("Enter 2nd subject marks you get "));
var obtained_marks3 = parseInt(prompt("Enter 3rd subject marks you get "));
var all_obtained = obtained_marks1 + obtained_marks2 + obtained_marks3;
var percentage = (all_obtained / grand_total) * 100;
document.write("subject one  is " + name1);
document.write("<br>subject two is " + name2);
document.write("<br>subject three is " + name3);
document.write("<br> overall percentage is " + percentage);
