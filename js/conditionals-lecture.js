// let flavor = prompt("Welcome to codeup ice cream. What flavor do you want?");
//
// flavor = flavor.toLowerCase();

// if (flavor === "chocolate") {
//     alert("One chocolate coming right up!");
// } else if(flavor === "vanilla"){
//     alert("One vanilla coming right up!");
// }else {
//     alert("we do not have that flavor. Sorry! :(");
// };

// switch (flavor) {
//     case("chocolate"):
//         alert("One chocolate coming right up!");
//         break;
//     case("vanilla"):
//         alert("One vanilla coming right up!");
//         break;
//     case("strawberry"):
//         alert("One strawberry coming right up!");
//         break;
//     default:
//         alert("We do not have that flavor. Sorry! :(");
//         break;
// };

// let decision = confirm("Are you sure you want to close this page?");
//alert(decision);

// if (decision) {
//     alert("OK. closing the page.");
// } else {
//     alert("OK. Keeping the page open.");
// };

// SHORT VERSION BELOW!!

// (decision)?alert("Closing the page"):alert("Keeping page open.");

//let number = prompt("Enter a number:");

// function divisibleByFive(number){
//     if (number % 5 === 0){
//         alert("That number is divisible by 5");
//     } else {
//         alert("That number is not divisible by 5");
//     }
// };

//divisibleByFive(number);

//cleaner way below:

// THE COLON MEANS RETURN!!

// function divisibleByFive(number){
//     alert(number % 5 === 0 ? "That number is divisible by 5": "That number is not divisible by 5");
// };
//
// divisibleByFive(prompt("Enter a number:"));

//console.log(prompt("say something"));

// function alertMVPCustomer(purchaseTotal){
//     if (purchaseTotal > 1000){
//         alert("MVP!");
//     }
// }
// alertMVPCustomer(1001);

// function isMVP(purchaseTotal){
//     return purchaseTotal > 1000;
// }
//
// let customerPurchase = 1001;
//
// if (isMVP(customerPurchase)){
//     alert("MVP!");
// }