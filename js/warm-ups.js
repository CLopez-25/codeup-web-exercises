// //write a function that accepts an array of numbers and returns its average.
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
//
//
// //function that accepts an array of strings and returns the longest string. if there are two strings of equal length
// // it returns the one with the lowest index.
//
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

const neighborhood1 ={
    neighborhood: "Lovely Estates",
    medianHomePrice: 280000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 6},
        {name: "HS3", rating: 8}
    ]
}

const neighborhood2 ={
    neighborhood: "Luminous Estates",
    medianHomePrice: 270000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 8},
        {name: "HS3", rating: 8}
    ]
}

const neighborhood3 ={
    neighborhood: "Ginormous Ego Estates",
    medianHomePrice: 350000,
    pool: true,
    tennis: true,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 9},
        {name: "MS2", rating: 9},
        {name: "HS3", rating: 9}
    ]
}

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

