// describe- takes in two parameters
// it function- takes in a message/title
// also takes in a function as a second parameter
// translate plain english into jasmine specs(expectation)
// expectation has two parts an assertion and a matcher
// expect is the assertion/ toBe-not.ToBe is a matcher
// should want to start with "should be a defined function"
//

// Assessment walk through

//     function isANumber(value){
//         return !(isNaN(value) || typeof value === "boolean" || value === null);
//     }
//
// function multiply(value1, value2){
//     if (!isANumber(parseFloat(value1)) || isNaN(parseFloat(value2))){
//         return false;
//     } else {
//         return parseFloat(value1) * parseFloat(value2);
//     }
// }
//
// function add(value1, value2){
//     if (!isANumber(parseFloat(value1)) || isNaN(parseFloat(value2))){
//         return false;
//     } else {
//         return parseFloat(value1) + parseFloat(value2);
//     }
// }
//
// function parseNumber(value){
//     return parseFloat(value);
// }
//
// function increment(value){
//     if (!isANumber(parseFloat(value))){return false;} else {
//         return parseFloat(value) + 1;
//     }
// }
//
// function decrement(value){
//     if (!isANumber(parseFloat(value))){return false;} else {
//         return parseFloat(value) - 1;
//     }
// }
//
// function getHighestNumber(value1, value2, value3){
//     if(!isANumber(value1) || !isANumber(value2) || !isANumber(value3)){
//         return false;
//     }
//     return Math.max(value1, value2, value3);
// }
//
// function square(value){
//     if (!isANumber(value)){return false;}
//     return value * value;
// }
//
// function sumOfSquares(value1, value2){
//     if (!isANumber(value1) || !isANumber(value2)){return false}
//     return (value1 ** 2) + (value2 ** 2);
// }
//
// function isPalindrome(value){
//     if (typeof value !== "string"){return false;}
//     return value.toLowerCase() === value.split("").reverse().join('').toLowerCase();
// }