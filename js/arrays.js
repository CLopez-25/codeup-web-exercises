// declaring an array literal:
// each item in an array is called an element.
//index counts at 0/ length starts at 1

let groceryList = ['bread', 'eggs', 'butter', 'milk'];

//start at zero because the array starts at zero
for(let i = 0; i < groceryList.length; i ++){
    if (i === groceryList.length - 1){
        console.log("I have to buy " + groceryList[i] + ".");
    } else {
        console.log("I have to buy " + groceryList[i] + " and ");
    }
}

// i goes next to grocery list so it can go through the entire grocery list in sequence