//write a function that accepts an array of numbers and returns its average.



//function that accepts an array of strings and returns the longest string. if there are two strings of equal length
// it returns the one with the lowest index.

function indexOfSmallest(a) {
    let lowest = 0;
    for (let i = 1; i < a.length; i++) {
        if (a[i] < a[lowest]) lowest = i;
    }
    return lowest;
}