// let slices = 4;
// console.log(`There are ${slices} slices`);
// while (slices > 0){
//     console.log("I'll have a slice");
//     slices = slices - 1;
//     //shorthand = slices--;
//     console.log(`Now there's ${slices} slices left`);
// }
// console.log("No more pizza.");
// There's 4 slices, code continues to loop until there is no pizza left.
// console log at the beginning and the end to avoid breaking your code!
// Executing the code until 1 because we put > 0.

// let counter = 0;
// while (counter <= 100){
//     console.log(counter);
//     counter++;
// }
//this will count from 0 to 100.

// let counter = 100;
// while (counter >= 0){
//     console.log(counter);
//     counter--;
// }
//this will count from 100 to 0.

// let number = 5;
// while (number < 200){
//     // number = number * 2;
//     console.log(number)
//     number *= 2;
// }
// this multiplying the number output by 2, starting from 5 for numbers less than 200.

//Pseudo code
// Ask a user for input -- how much does something cost
// Assign the user input to a variable
// Declare a variable to hold the total cost.
// Tell the user what the total is
// Get the user input for the next item's cost
// Needs to be a way for the user to say when there's no more items

//first draft:
// let total = 0;
// let priceOfItem = parseFloat(prompt("Enter the price of your item:"));
// total = total + priceOfItem;
// alert("Your total is now " + total);
// let userInput = "";
// while (userInput !== "stop"){
//     userInput = prompt("Enter the price of your next item:");
//     if (userInput === "stop"){
//         alert("Your final total is " + total);
//     } else{
//         priceOfItem = parseFloat(userInput);
//         total = total + priceOfItem;
//         alert("Your total is now " + total);
//     }
// }


// if i want a loop to continue i can (while) true.
// we are using a conditional inside of a loop.
// Short version:

// let total = 0;
// let priceOfItem;
// while(true){
//     let userInput = prompt("Enter the price of your item:" +
//                             "\n Enter STOP when you are done");
//     if (userInput === "STOP") {
//         alert("Your final total is " + total.toFixed(2));
//         break;
//     } else {
//         priceOfItem = parseFloat(userInput);
//         total = total + priceOfItem;
//         alert("Your total is " + total.toFixed(2));
//     }
// }

// let number = Math.ceil(Math.random() * 6);
// let guess;
// do {
//     guess = parseInt(prompt("Enter a number between 1 and 6"));
//     console.log(guess)
// } while (guess !== number);
// alert(`Your guess of ${guess} matches the number ${number}!`);

// this is the loop control variable
// initialize to a starting value
// let count = 100;
// // check the value of the loop control variable in a conditional test
// while (count >= 0){
//     console.log(count);
//     // change the value of the loop control variable
//     count = count - 1;
//     // count -- ;
// }

//following does the exact same thing as above!!:
for(let count = 100; count >= 0; count = count - 1){
    console.log(count);
}

// //even more simplified
// for(let i = 100; i >= 0; i--){
//     console.log(i);
// }

// let i = 0;
// while (i < 100){
//     i++;
//     console.log(i);
// }

// for (i = 0; i < 100; i++) {
//     console.log(i);
// }
