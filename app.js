// chapter 1

// question 1 

alert("huzaifa")
alert("imran")
alert("12345678901")
alert("abcxyz@gmail.com")
alert("password1223")

// question 2

alert("I am learning JavaScript!");

// question 3

alert("I am Working very seriously on my assignment")

// chapter 2

// question 1

var a=("userAge")
document.write(a)

// question 2 

var b;
var b=("Hello World")
document.write(b)

// question 3

var teamname;

teamname="avengers"
alert(teamname)

// question 4

var bestMan=("Charlie");
bestman="tommy";
document.write(bestman)

// chapter 3

var caseQty;

// question 2

caseQty=144

// question 3

var num=("144");
document.write(num)

// question 4

var total;
total=7+5;

// question 5

var merchTotal =80;
var shippingCharge =20;
var orderTotal =merchTotal+shippingCharge;
document.write(orderTotal)

// question 6

var num1=10;
num1 = num1 + 5 ;
document.write(num1)

// chapter 4

// question 1

var productCost = 3.45;

// question 2 

var nameofBand;

// question 3

var totalAmount = 100;

// question 4

var huzaifaImaran;

// question 5

var legalVariable = ("hello world , myWork , _underScore , $dollarSign")
var illegalVariable = ("my variable (contain space) , hello-world(contain hyphen) ,123abc(start with number) , uses special character except $ or _ ")

// chapter 5

// question 1

var ans= (modulusOperator);

example = ( X % Y )

// question 2

var num=20 % 6
var ans =(3)
document.write(ans)

// question 3

var largeNum = 1000 * 2000 ;
document.write=(largeNum)

// question 4

var e = 10;
var f = 5;
var result = e-f;
document.write(result)

// question 5

var reminderValue = 17 % 5;

// question 6

var h = ("2 * 2");
alert(h)

// chapter 6

// question 1

var a=x++;

// question 2

var x = 100;
var y=x--;

// question 3

var x=50;
var y=x++;
var y=51;

// question 4

var y=50;
var z= --y;
var z = 49 ;

// question 5

num=5
newNum = num--;

// question 6

num = 5;
newNum = num++;
// question 7

var num = 10;
num++;
alert(num);

// chapter 7

// question 1

var calculatedNum = 2 + (2 * 6);
answer=14;

// question 2

var calculatedNum = (2 + 2) * 6;
answer=24;

// question 3

var calculatedNum = (2 + 2) * (4 + 2);
answer=24;

// question 4

var calculatedNum = ((2 + 2) * 4) + 2;
answer=10;

// question 5

var calculatedNum = 2 + 2 * 4 + 10;
answer=(2 + 2) * (4 + 10);
finalAnswer=56

// question 6

varCalculatedNum = 2 + 2 * 4 + 10;
answer=2 + (2 * 4) + 10;
finaLAnswer=20

// question 7

varCalculatedNum = 4 / 2 * 4;
answer= questionError;

// chapter 8

// question 1

var num = "2" + "2";
answer=22(becauseofstrings)

// question 2

message = ("Hello," + "Dolly");
answer="Hello,Dolly";

// question 3

alert("33" + 3);
answer=":333";
// question 4

alert("Pakistan " + "Zindabad");

// question 5

var result = "The answer is " + 42;
answer="The answer is 42";

// question 6

var str1 = "Hello, ";
var str2 = "World!";
var result = str1 + str2;
answer="Hello, World!";

// chapter 9

// question 1

var firstName = prompt("Enter first name");

// question 2

 var country = prompt("Country?", "China");

// question 3

var yourName = prompt("Enter Your Name");

// question 4

var favoriteFood = prompt("What is your favorite food?", "Pizza");

// question 5

var message = "What is your favorite hobby?";
var defaultResponse = "Reading";

var userResponse = prompt(message, defaultResponse);

// question 6

var userResponse = prompt("What is your favorite color?", "Blue");

alert("You entered: " + userResponse);

// chapter 10

// question 1

var city = "Karachi"
if (city === "Karachi") {
  console.log("The City OF Lights")
}

// question 2

notunderstanding

// question 3

let ZipCode = "10010";

if (ZipCode === "10010") {
  alert("Karachi");
} else {
  alert("Please write correct city");
}
 
// question 4

let x = 1;

if (x === 1) {
  x = 10;
}

// chapter 11

// question 1

if (!(x === y))

// question 2

(x >= y) 

// question 3

if (x!== 5) {
    x = 10;
  }

//   question 4

if (5!== 10) {
    alert("Congratulations! The condition is true!");
  }

// question 5

let firstName = prompt("Please enter your first name:");

if (firstName!== "John") {
  alert("No match");
}

// chapter 12

// question 1

let score = 85;
let passingScore = 80;

if (score >= passingScore) {
  alert("You passed!");
} else {
  alert("You did not pass.");
}

// question 2

// Get marks from user
let marks = prompt("Enter your marks (out of 100):");

// Validate input
if (isNaN(marks) || marks < 0 || marks > 100) {
  alert("Invalid input! Please enter a number between 0 and 100.");
} else {
  // Calculate percentage
  let percentage = (marks / 100) * 100;

  // Determine grade
  if (percentage >= 90) {
    grade = "A";
  } else if (percentage >= 80) {
    grade = "B";
  } else if (percentage >= 70) {
    grade = "C";
  } else if (percentage >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  // Display marksheet
  alert(`Marks: ${marks}\nPercentage: ${percentage}%\nGrade: ${grade}`);
}

// question 3

let a = 5; // assign a value to a

if (a === 10) {
  alert("a is 10");
} else {
  alert("The correct value of a is " + a);
}

// question 4

let city = prompt("Enter a city:").toLowerCase();

if (city === "karachi") {
  alert("You are in Karachi!");
} else if (city === "lahore") {
  alert("You are in Lahore!");
} else {
  alert("You are somewhere else!");
}

// chapter 13

// question 1

if (a === b && c === d);

//  question 2

if (a === b || c!== d) {}

// question 3

if ((name === "Hamza" || name === "Arsalan") && age < 60) {}

// question 4
let var1 = 10;
let var2 = 20;

if (var1 < var2 || var1 > var2) {
  alert("var1 is not equal to var2");
}

// question 5

let firstName = "Assistant";
let lastName = "AI";

let inputFirstName = prompt("Please enter your first name:");
let inputLastName = prompt("Please enter your last name:");

if (inputFirstName === firstName && inputLastName === lastName) {
  alert("You entered the correct names!");
}

// chapter 14

// question 1

let password = prompt("Please enter your password:");

if (password !== "") {
  if (password.length <= 5)""} {
    alert("Password must be greater than")}

    // question 2

    var a = 1;
var c = "Max";

if (a === 1) {
  if (c === "Max") {
    alert("OK");
  }
}

// question 3

var a = 1;
var c = "Max";

if (a === 1) {
  if (c === "Max") {
    alert("OK");
  }
}

// question 4

var x = 5;
var y = 5;

if (x === y) {
  if (x <= y) {
    alert("The conditions are true!");
  }
}

// chapter 15

// question 1

var myArray = [];

// question 2

var myArray = ["Hello"];

// question 3

var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]);

// question 4   

var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
var length = alphabet.length;
alert("The length of the array is: " + length);

//question 5

var myArray = ["Hello"];
myArray[1] = "World";
alert("The new element is: " + myArray[1]);

// chapter 16 

// remained because of timeand load shedding due to rain