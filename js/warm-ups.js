//write a function that accepts an array of numbers and returns its average.
// let array = [5, 10, 15];
// let array2 = [-25, -22, 250, 60];
// let array3 = ["not a number", 25, 78];
//
// function arrayAverage(array){
//     let total = 0;
//     for(let i = 0; i < array.length; i++){
//         if (!isNumber(array[i])){return false;}
//         total += array[i];
//     }
//     return total/array.length;
// }


//function that accepts an array of strings and returns the longest string. if there are two strings of equal length
// it returns the one with the lowest index.

// let stringArray = ["cesar", "sky", "oliver"];
//
// function longestString(arrayOfStrings){
//     let longest = '';
//     for (let i = 0; i < arrayOfStrings.length; i++){
//         if (arrayOfStrings[i].length > longest.length)longest = arrayOfStrings[i];
//         }
//     return longest;
//     }
//
// function indexOfSmallest(a) {
//     let lowest = 0;
//     for (let i = 1; i < a.length; i++) {
//         if (a[i] < a[lowest]) lowest = i;
//     }
//     return lowest;
// }

// Write a function, calculateTotalStudents, that returns the total number of students recorded in the classes array.
// let classes = [
//     {class: "6th grade history", students: 18},
//     {class: "7th grade history", students: 20},
//     {class: "8th grade history", students: 22}
// ];
//
// function calculateTotalStudents(array){
//     let total = 0;
//     for(let i = 0; i < array.length; i++){
//         total += array[i].students;
//     }
//     return total;
// }
//
// let numericArray = [8, 10, 20];
//
// function arraySum(array){
//     let total = 0;
//     for(let i = 0; i < array.length; i++){
//         total += array[i];
//     }
//     return total;
// }
//
// console.log(arraySum(numericArray));

// Write a function called convertToObject that takes in a string that is the name of a class, and a number that is the number of students, and returns an object with the properties `class` and `students`

//convertToObject("Intro to Programming", 20) returns {class: "Intro to Programming", students: 20}

// const convertToObject = function (nameOfClass, numberOfStudents){
//     return {
//         class: nameOfClass,
//         numberOfStudents: numberOfStudents
//     }
// }

//arrow function below:
// const convertToObject = (nameOfClass, numberOfStudents) => {
//     return {
//         class: nameOfClass,
//         numberOfStudents: numberOfStudents
//     }
// }
//
// console.log(convertToObject("Intro to Programming", 20));

// const neighborhood1 ={
//     neighborhood: "Lovely Estates",
//     medianHomePrice: 280000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "ES1", rating: 8},
//         {name: "MS2", rating: 6},
//         {name: "HS3", rating: 8}
//     ]
// }
//
// const neighborhood2 ={
//     neighborhood: "Luminous Estates",
//     medianHomePrice: 270000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "ES1", rating: 8},
//         {name: "MS2", rating: 8},
//         {name: "HS3", rating: 8}
//     ]
// }
//
// const neighborhood3 ={
//     neighborhood: "Ginormous Ego Estates",
//     medianHomePrice: 350000,
//     pool: true,
//     tennis: true,
//     crimeRate: "low",
//     schools: [
//         {name: "ES1", rating: 9},
//         {name: "MS2", rating: 9},
//         {name: "HS3", rating: 9}
//     ]
// }

// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.

// function desirableNeighborhood(neighborhoodsObject){
//         let total = 0;
//         for(let i = 0; i < neighborhoodsObject.schools.length; i++) {
//             total += neighborhoodsObject.schools[i].rating;
//     }
//     return neighborhoodsObject.medianHomePrice < 300000 && neighborhoodsObject.crimeRate === "low" && total >= 24;
// }

//Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.
//
// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
//
// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
//
//     your referral bonus, and
//
//     the price of a beer can
//
// For example:
//
// beeramid(1500, 2); // should === 12
// beeramid(5000, 3); // should === 16

//whats the cost of each level? level * level * priceOfCan

// i need a total cost accumulator variable and some kind of level variable that keeps track of what level i am on
// and i need to keep looping until totalCost > bonus

// function beeramid(bonus, price){
//     let totalCost = 0;
//     let levels = 0;
//     while (totalCost < bonus){
//         totalCost += levels * levels * price;
//         if (totalCost + ((levels + 1) ** 2 * price) > bonus){break;}
//         levels++;
//     }
//     return levels;
// }

// Daniel's solution
// function beeramid (bonus,price){
//     let total = (bonus - (bonus % price))/price;
//     let x = 0;
//     for (let i = 0; total >= ((1 / 3)*(i**3))+((1 / 2)*(i**2))+((1 / 6)*(i)); i++){
//         x = i;
//     }
//     return x;
// }

// function beeramid (bonus,price){
//     let total = (bonus - (bonus % price))/price; //this line tells you how many cans of beer you can buy
//     let x = 0; //accumulator variable
//     for (let i = 0; total >= ((1 / 3)*(i**3))+((1 / 2)*(i**2))+((1 / 6)*(i)); i++){ //solved for a cubic function
//         x = i; //match the accumulator to the number of levels
//     }
//     return x;
// }
//
// let shoes = [
//     [0, 21],
//     [1, 23],
//     [1, 21],
//     [0, 23]
// ];

// function pairOfShoes(shoes) {
//     let shoeHasMatch = false;
//     let shoeThatMatches;
//     let newArray;
//     for (let i = 1; i < shoes.length; i++){
//         if (shoes[i][1] === shoes[0][1]){
//             if (shoes[i][0] !== shoes[0][0]){
//                 shoeHasMatch = true;
//                 shoes.splice(i, 1);
//                 shoes.splice(0,1);
//             }
//         }
//     }
//     return shoes.length < 2 || !shoeHasMatch ? shoeHasMatch : pairOfShoes(shoes);
// }

//     function pairOfShoes(shoes) {
//
//     function findMatch(shoesArray){
//         for (let i = 1; i < shoes.length; i++){
//             if (shoes[i][1] === shoes[0][1]){
//                 if (shoes[i][0] !== shoes[0][0]){
//                     shoes.splice(i, 1);
//                     shoes.splice(0,1);
//                 } return true;
//             }
//         }
//         return false;
//     }
//     for (let i = 1; i < shoes.length; i++){
//         let match = findMatch(shoes[i]);
//         if (!match){return false;}
//     }
//     return true;
// }


// const attendance = {
//     miami: 32789,
//     buffalo: 45678,
//     portland: 24567
// }
// // Given the attendance object, write a function that returns the total attendance across all teams.
//
// // function totalAttendance(attendanceObject){
// //     let attendanceArray = Object.values(attendanceObject);
// //     let total = 0;
// //     for (let i = 0; i < attendanceArray.length; i++){
// //         total += attendanceArray[i];
// //     }
// //     return total;
// // }
//
// function totalAttendance(attendanceObject){
//     let total = 0;
//     for (const prop in attendance) {
//         total += attendance[prop];
//     }
//     return total;
// }
//
// // Given the attendance object, write a function that returns the average attendance
// function averageAttendance(attendanceObject){
//     let total = 0;
//     for (const prop in attendance){
//         total += attendance[prop];
//     }
//     return total/Object.keys(attendance).length;
// }
//
// // Given the attendance object, write a function that returns an object with totalAttendance and averageAttendance properties set to the correct values
//
// function createObject(attendanceObject){
//     let total = 0;
//     for (const prop in attendanceObject){
//         total += attendance[prop];
//     }
//     return {
//         totalAttendance : total,
//         averageAttendance: total/Object.keys(attendance).length
//     }
// }
//
// // Convert to Number
// //  * You prepare a list to send to the insurance company. As you finish, you notice you miss-formatted it.
// //  * Write a function named convertToNumber that takes in an object with at least one key/value pair, convert all the values to numbers.
// //  *
// //  * Examples
// //  *
// //  * convertToNumber({ piano: "200" }) ➞ { piano: 200 }
// //  * convertToNumber({ piano: "200", tv: "300" }) ➞ { piano: 200, tv: 300 }
// //  * convertToNumber({ piano: "200", tv: "300", stereo: "400" }) ➞ { piano: 200, tv: 300, stereo: 400 }
// //  */
//
//
// /**
//  * Online Shopping
//  * Create a function named freeShipping that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.
//  *
//  * Examples
//  *
//  * freeShipping({ Shampoo: 5.99, Rubber_Ducks: 15.99 }) ➞ false
//  * freeShipping({ Flatscreen_TV: 399.99 }) ➞ true
//  * freeShipping({ Monopoly: 11.99, Secret_Hitler: 35.99, Bananagrams: 13.99 }) ➞ true
//  *
//  * Notes
//  * Ignore tax or additional fees when calculating the total order cost.
//  */
//
// function freeShipping(){
//
// }
// ------------------------------------------
/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8646 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 **/

// let address = '8646 Sunny Oaks'
// function convertAddressToObject(addressString) {
//     return {
//         // if you don't include the second parameter it will go until the end of the string!
//         streetNumber: addressString.substring(0, addressString.indexOf(' ')),
//         streetName: addressString.substring(addressString.indexOf(' ') + 1)
//     }
// }
// end of first question solution |||

/**
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
 *
 * Examples
 *
 * >> totalPets([
 *       {name: 'Fernando Mendoza', pets: 1},
 *       {name: 'Douglas Hirsh', pets: 8},
 *       {name: 'Kenneth Howell', pets: 2}
 *    ]) ➞ 11
 */

// let peopleAndPets = [
//     {name: 'Fernando Mendoza', pets: 1},
//     {name: 'Douglas Hirsh', pets: 8},
//     {name: 'Kenneth Howell', pets: 2}
// ]

// for loop
// function totalPets(arrayOfObjects) {
//     let total = 0;
//     for (let i = 0; i < arrayOfObjects.length; i++){
//         total += arrayOfObjects[i].pets;
//     }
//     return total;
// }

//forEach
// function totalPets(arrayOfObjects){
//     let total = 0;
//     arrayOfObjects.forEach(function (object){
//         total += object.pets;
//     });
//     return total;
// }

// .reduce 
// function totalPets(arrayOfObjects){
//     return arrayOfObjects.reduce(function(acc, currentValue){
//         return acc + currentValue.pets;
//     }, 0)
// }
// end of second question solution ||


// -----------------------------------------------------------


// -- Write a function that takes in an input, checks that input, and returns true or false depending on some feature of the input (what kind of number, what kind of string, what type of data it is)


// -- Write a function that takes in an input, does something to it, and returns the modified data (do a mathematical operation on it, do a string method to modify it, use an array method to modify an array)


// -- Write a function that takes in an array and returns the array modified in some way -- certain elements removed, certain elements modified in a regular way (example, every numerical value doubled, every string uppercased)


// -- Write a function that accepts an array of objects where each object has at least one property with a numeric value, be able to return the total or average of the numeric values


// -- Write a function that accepts a string, breaks down the string into components, and returns an object where each component of the string has become the value of a property


// -- Write a function that analyzes a string, returning the results of the analysis, example, return the length of the string


// -- Write a function that analyzes a string, returning an object that contains several properties with information about the string, example, length, firstLetter, and lastLetter properties


// -- Write a function that takes in a string and modifies it in some way.  Example write a function that takes in a string and replaces every instance of the letter e with the number 3, and every instance of the letter i with the number 1, and every instance of the letter o with the number 0, and a with 4.  Write a function that capitalizes every other letter in the string starting with the first letter, counting blank spaces as characters.  Try the same not counting blank spaces as characters.  Write a function that capitalizes the last letters of every word in a string.


    /**
     * Get Sum of People's Budget
     * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
     *
     * Examples
     *
     * >> getBudgets([
     *        { name: "John", age: 21, budget: 23000 },
     *        { name: "Steve",  age: 32, budget: 40000 },
     *        { name: "Martin",  age: 16, budget: 2700 }
     *    ]) ➞ 65700
     * >> getBudgets([
     *        { name: "John",  age: 21, budget: 29000 },
     *        { name: "Steve",  age: 32, budget: 32000 },
     *        { name: "Martin",  age: 16, budget: 1600 }
     *    ]) ➞ 62600
     */


    /**
     * Get Student Top Notes
     * Create a function named getStudentTopNotes that takes an array of students and returns an array of their top notes.
     * If the student does not have notes then let's assume their top note is equal to 0.
     *
     * Examples
     *
     * >> getStudentTopNotes([
     *      {
     *         id: 1,
     *         name: "Jacek",
     *         notes: [5, 3, 4, 2, 5, 5]
     *       },
     *      {
     *         id: 2,
     *         name: "Ewa",
     *         notes: [2, 3, 3, 3, 2, 5]
     *       },
     *      {
     *         id: 3,
     *         name: "Zygmunt",
     *         notes: [2, 2, 4, 4, 3, 3]
     *       }
     *    ]) ➞ [5, 5, 4]
     */



    /**
     * TODO:
     * Remove the Letters ABC
     * Create a function named removeABC that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.
     *
     * Examples
     * >> removeABC("This might be a bit hard") ➞ "This might e  it hrd"
     * >> removeABC("hello world!") ➞ null
     * >> removeABC("") ➞ null
     *
     * Notes
     * If the given string does not contain "a", "b", or "c", return null.
     */


//     Write a function called removeBs that takes in an array of strings and returns an array of strings with all b's removed from each string. Assume the array contains only string elements.
//
// Examples...
//
// removeBs(['abc', 'ab', 'cat', 'Bay']) // returns ['ac', 'a', 'cat', 'ay']





// Write a function that accepts the top three bowling scores and returns the average.
//
// Write a function that accepts the top three bowling scores and returns the average.
// 1. write a function
// 2. pass in parameters
// 3. 3 scores ( variables)
// 4. return something (number)
//
// let first = 120;
// let second = 234;
// let third = 90;

// Modify the function to accept an array of bowling scores and return the average
//
// Write a function that accepts an array of bowling scores and returns the highest
//
// Write a function that accepts an array of bowling scores and returns true if the highest score is divisible by 3