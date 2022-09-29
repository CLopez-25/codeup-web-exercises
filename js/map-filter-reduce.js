const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
// let output = '';
// prices.forEach(price => {
// if there's more than two parameters they have to be wrapped in parentheses with a comma separating them
//     const tax = (price * 0.0825).toFixed(2);
//     const  total = (price * parseFloat(tax)).toFixed(2);
//     output += '<p>Item number: ${index + 1}. Price: $${price}. Tax: $${tax}. Total: $${total}</p>';
//     $("div").html(output);
//     if (index === array.length-1){
//         $("div").append("<p>That's it!!</p>");
//     }
// });

const priceAfterTax = prices.map(price =>{
    const tax = (price * 0.0825).toFixed(2);
    const  total = (price * parseFloat(tax)).toFixed(2);
    return parseFloat(total);
});
// console.log(prices);
// console.log(priceAfterTax);

const doubleArray = prices.map(price => price * 2);
// console.log(doubleArray);

const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];

const mileage = cars.map(car => car.mileage);
console.log(mileage);

const newObject = cars.map(car => {
    car.newProp = 'new property';
    return car;
})
console.log(cars[0]);

