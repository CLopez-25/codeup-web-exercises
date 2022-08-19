// declaring an array literal:
// each item in an array is called an element.
//index counts at 0/ length starts at 1

let groceryList = ['bread', 'eggs', 'butter', 'milk'];
console.log(groceryList);

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

//let beachThings = ["ball", "beer", "sand", "water"];
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
//
// prices.forEach(function(price, index){
//     console.log("item number " + (index + 1) + " costs " + price);
// });

groceryList.push("potatoes", "serranos"); // add at the end
console.log(groceryList);
groceryList.pop(); // removes last item on the list
console.log(groceryList);

// add or remove from the beginning: shift unshift
groceryList.unshift("sliced cheddar");
console.log(groceryList);
groceryList.shift();
console.log(groceryList);

let indexOfButter = groceryList.indexOf("butter");
console.log(indexOfButter);

//telling javascript to change the index of butter to say peanut butter
groceryList[indexOfButter] = "peanut butter";
console.log(groceryList);

//replacing bread with avocado/ assigned a new value to the first element in the array
groceryList[0] = "avocados"
console.log(groceryList);

//slices the list in half/ logging the first half
let firstHalfOfGroceryList = groceryList.slice(0,2);
console.log(firstHalfOfGroceryList);

let secondHalfOfGroceryList = groceryList.slice(2);
console.log(secondHalfOfGroceryList);

//sliced put something in the middle then put it back together:
firstHalfOfGroceryList.push("butter");

groceryList = firstHalfOfGroceryList.concat(secondHalfOfGroceryList);
console.log(groceryList);

//changes the order of the array:
groceryList.reverse();
console.log(groceryList);

groceryList.sort();
console.log(groceryList);
console.log(groceryList.reverse());


// "pushing the limit" -javier
prices.sort(function (a,b) {
    return a - b;
});
console.log(prices);

groceryList[3] = "Blueberries";
console.log(groceryList);
console.log(groceryList.sort());
// changes the order because capital letter come first


// for(let i = 0; i < groceryList.length; i++){
//     groceryList[i] = groceryList[i].toLowerCase();
// }
// console.log(groceryList.sort());

// this is saying to take the whole array and lowercase it!
groceryList.forEach((item, index, array) => {
    array[index] = item.toLowerCase();
})
console.log(groceryList);