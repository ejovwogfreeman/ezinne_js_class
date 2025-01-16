// alert("hello from external js file");

// ways of writing javascript in html
// 1) inline js - done using html event attribute (to trigger js functions)
// 2) internal js - done by writing javascript code in a script tag in the html file
// 3) external js - done by using a src attribute of a script tag to point to an external js file

// js files has the .js extension (file extension)
// js uses camel case (myNameIsEzinne)

// variable and data types
// varaible - are containers for storing values
// variables hold datas (data types)

// primitive data types
// 1) number
// 2) string
// 3) boolean
// 4) null
// 5) undefined

// reference data types
// 1) array
// 2) objects

// varaible declaration

// 1) var
// 2) let
// 3) const

// // backticks or template literals
// var myVar = `Hello i am a string 'hello'..."hewllooo"`;

// // type operator (typeof) - used to check data type
// console.log(myVar);
// console.log(typeof myVar);

// let myName = "GB";

// console.log("Hello my name is " + myName);
// console.log(`Hello my name is ${myName}`);

// operators - combine operands to give values or results

// There are different types of JavaScript operators:

// Arithmetic Operators (+, -, *, /, %, **)
// Assignment Operators (=, +=, -=, *=, /=)
// Comparison Operators (==, ===, !=, !==, >, <, >=, <=)
// String Operators (+, +=)
// Logical Operators (&&, ||, !)
// Ternary Operators (? :)
// Type Operators

// arithmetic operator
// let x = 23;
// let y = 20;

// // addition
// let z = x + y;

// // subtraction
// let z = x - y;

// // multiplication
// let z = x * y;

// // division
// let z = x / y;

// modulus
// let z = x % y; // (40 % 20 gives 0)
// let z = x % y; // (23 % 20 gives 3)
// console.log(z);

// even numbers btw 1 and 20;
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// 2 ( 0 and 1)
// 3 ( 0 , 1 and 2)
// 4 ( 0 , 1 , 2 and 3)

// power (indices)
// let x = 400;

// let xsqr = x ** 3;

// NG: the sqrt of a number is always the number raised to power of 0.5

// let sqrtx = x ** 0.5;

// console.log(sqrtx);

// let name = "Ezinne";

// console.log(name);

// let x = 25;

// x = x + 5;
// x += 5;
// x -= 5;
// x *= 5;
// x /= 5;
// x %= 5; // (5 reminder 0, therefore the result is 0)

// console.log(x);

// - DRY (Dont repeat yourself)

// console.log(5 > 3);
// console.log(5 < 3);
// console.log(5 >= 3);
// console.log(5 <= 3);
// console.log(5 == 5); //true (== compares values alone)
// console.log(5 == "5"); //true (== compares values alone)
// console.log(5 === 5); //true (== compares bothh values and data types)
// console.log(5 === "5"); //false (== compares bothh values and data types)

// console.log(5 != 5); //(!= is the negation of ==)
// console.log(5 !== 5); //(!== is the negation of ===)

// console.log(5 != "5"); //false(!= is the negation of ==)
// console.log(5 !== "5"); //true(!== is the negation of ===)

// // concatenation
// let name = "Godbless ";
// let surname = "Freeman";

// // let fullName = name + " " + surname;

// let fullName = (name += surname);

// console.log(fullName);

// Logical operator (&&) - all expressions must be true for the result to be true
// console.log(8 > 3 && 9 > 5 && 20 < 30); // true
// console.log(8 > 3 && 9 < 5 && 20 < 30); // false

// Logical operator (||) - alteast one expression must be true for the result to be true
// console.log(8 < 3 || 9 < 5 || 20 < 30); // true
// console.log(8 < 3 || 9 < 5 || 20 > 30); // false

// Logical not (!) - it negates a statement
// console.log(!(5 < 3)); //true
// console.log(!(5 > 3)); //false

// let color = "blue";

// if (color == "blue") {
//   console.log("your favorite color is blue");
// } else {
//   console.log("your favorite color is not blue");
// }

// ternary operator (short method of writing if/else statement)
// console.log(color == "blue" ? "your color is blue" : "your color is not blue");

// type operator -used to check the data type of a variable or value

// console.log(typeof 5); // number
// console.log(typeof 0.5); // number
// console.log(typeof "hello"); // string
// console.log(typeof true); // boolean
// console.log(typeof false); // boolean
// console.log(typeof null); // object
// console.log(typeof undefined); // undefined

// functions - are block code designed to perform a particular task

// let x = 4;
// let y = 5;

// x = 9;
// y = 10;

// console.log(x + y);

// syntax (function without parameters/arguments)
// function functionName(){
//     codeblock
// }

// syntax (function with parameters/arguments)
// function functionName(param1, param2, param3...etc){
//     codeblock
// }

// function that greets

// function greet() {
//   console.log("Hello Ezinne");
// }

// greet();

// function greet(name) {
//   console.log("Hello " + name);
// }

// console.log(greet("Ezinne"));
// console.log(greet("Godbless"));
// console.log(greet("Bishop"));

// do function with name and time as arguments
// explain var, let and const
