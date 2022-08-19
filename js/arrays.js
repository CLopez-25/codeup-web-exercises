// declaring an array literal:
// each item in an array is called an element.
//index counts at 0/ length starts at 1

//let groceryList = ['bread', 'eggs', 'butter', 'milk'];

// looping over an array. Basic case

// for (let i = 0; i < groceryList.length; i +=){
//     console.log(i);
// }


//start at zero because the array starts at zero
// for(let i = 0; i < groceryList.length; i ++){
//     if (i === groceryList.length - 1){
//         console.log("I have to buy " + groceryList[i] + ".");
//     } else {
//         console.log("I have to buy " + groceryList[i] + " and ");
//     }
// }

// i goes next to grocery list so it can go through the entire grocery list in sequence

// literal 4 strings, console.log each string

let beachThings = ["ball", "beer", "sand", "water"];
// for (let i = 0; i < beachThings.length; i++){
//     if (i % 2 === 1){
//         console.log(beachThings[i] + " is cool.");
//     } else {
//         console.log(beachThings[i]);
//     }
// }

// function outputArray(array){
//     for (let i = 0; i < array.length; i ++){
//         console.log(array[i]);
//     }
// }
// outputArray(beachThings);

// FOR EACH ARRAYS:
// forEach loop takes an anonymous function
// the function we pass to the forEach loop has up to three parameters
// THE FIRST PARAMETER REPRESENTS the element in the array
// second parameter represents the index (index starts at zero unless you change it)
// the third
// we are going to pass a function to another


let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

prices.forEach(function(price, index){
    console.log("item number " + (index + 1) + " costs " + price);
});

