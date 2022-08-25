//write a function that accepts an array of numbers and returns its average.
let array = [5, 10, 15];
let array2 = [-25, -22, 250, 60];
let array3 = ["not a number", 25, 78];

function arrayAverage(array){
    let total = 0;
    for(let i = 0; i < array.length; i++){
        if (!isNumber(array[i])){return false;}
        total += array[i];
    }
    return total/array.length;
}


//function that accepts an array of strings and returns the longest string. if there are two strings of equal length
// it returns the one with the lowest index.

let stringArray = ["cesar", "sky", "oliver"];

function longestString(arrayOfStrings){
    let longest = '';
    for (let i = 0; i < arrayOfStrings.length; i++){
        if (arrayOfStrings[i].length > longest.length)longest = arrayOfStrings[i];
        }
    return longest;
    }

function indexOfSmallest(a) {
    let lowest = 0;
    for (let i = 1; i < a.length; i++) {
        if (a[i] < a[lowest]) lowest = i;
    }
    return lowest;
}