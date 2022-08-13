//The parts of a function
// 1. function keyword
// 2. The name of the function
// 3. Parentheses with zero or more parameters
// 4. If there's more than one parameter the list is comma seperated
// 5. curly braces contain the function body
// 6. the function body contains the code that runs when the function is invoked
// 7. [optional but common] return statement
// function sayHello (greeting, name) {
//     return `${greeting}, ${name}`;
// }
// 1. function keyword
// 2. The name of the function
// 3. parentheses with zero or more parameters
// 4. if there is more than one parameter, the list is comma separated
// 5. curly braces contain the function body
// 6. the function body contains the code that runs when the function is invoked
// 7. [optional but common] return statement
// function sayHello(greeting, name) {
//    return `${greeting}, ${name}`;
// }

// Here number has local scope
// the console.log will result in an error
//function localOrGlobal(){
//    let number = 20;
//}
// console.log(number);

// Here the number has global scope
// let number = 20;
// function localOrGlobal(){
//     console.log(number);
// }

// let number = 20;

// function declarations
// function localOrGlobal(){
//     let number = 10;
//     console.log(number);
//     anotherNumber = 23;
// }
// localOrGlobal();
// console.log(number);
//console.log(anotherNumber);

// function expression
// function expressions are not hoisted so this won't work:

// bark();
// const bark = function(){
//     console.log("woof!");
// }
//
// // function declaration
// // function declarations are hoisted, so this will work:
//
// yap();
// function yap(){
//     console.log("yip yap");
// }

// function declaration
// function add(num1, num2){
//    return num1 + num2;
// }

// function expression
// const add = function(num1, num2){
//  return num1 + num2;
// }

// arrow function -- if it only returns something, you don't need a return keyword
const add = (num1, num2) => num1 + num2;

// if there is only one parameter, you don't need parentheses around the parameter
const addTen = number => number + 10;

// if there are no parameters, you use empty parentheses
const helloWorld = () => "Hello World";

