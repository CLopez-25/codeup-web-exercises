//
// function isNumber(value){
//     return !(isNaN(value) || typeof value === "boolean");
// }
//
//
// while(true){
//     let oddNumber = prompt("Enter an odd number between 1 and 50:");
//     if (oddNumber >= 1 && oddNumber <= 50 && oddNumber % 2 === 1 && isNumber(oddNumber)){
//         console.log("Number to skip is: " + oddNumber);
//         console.log(" ");
//         for(let i = 1; i <= 50; i+= 2){
//             if(i == oddNumber){
//                 console.log("Yikes Skipping number " + oddNumber);
//                 continue;
//             } else {
//                 console.log("Here is an odd number: " + i);
//             }
//         }
//         break;
//     }
// }

