let currentWeather = {
    humidity: 77,
    temp: 82.33,
    feels_like: 88.79,
    clouds: 75,
    description: "cloudy"
}
// console.log(currentWeather.temp);
// // this is what .length means^
// // current weather is a reference to the object
// // object is the current weather (inside curly brace)
// console.log(currentWeather.description);
// console.log(currentWeather.feels_like);
//
// console.log(currentWeather["humidity"]);
//
// let userChoice = "clouds";
// console.log(currentWeather[userChoice]);
// userChoice = "temp";
// console.log(currentWeather[userChoice]);
// bracket notation for variable driven
// use dot notation for calling the choices


// object properties are like any other variable
// you can concatenate strings
// make decisions


// console.log("The current weather is " + currentWeather.temp);
// if (currentWeather.temp > 95){
//     console.log("It's kind of hot");
// } else {
//     console.log("It's cool today for Texas");
// }

//looping through an using for in loop:
// for (let property in currentWeather) {
//     console.log(property + " " + currentWeather[property]);
// }
//
// //dynamically add new properties to existing objects:
// currentWeather.uvIndex = 9.79;
// console.log(currentWeather.uvIndex);

// Arrays of objects:

let hourlyWeather = [
    {
        time: "08:00",
        temperature: 78.91,
        feels_like: 78.91
    },
    {
        time: "09:00",
        temperature: 79.57,
        feels_like: 79.57
    },
    {
        time: "10:00",
        temperature: 81.46,
        feels_like: 86.04
    },
    {
        time: "11:00",
        temperature: 84.49,
        feels_like: 89.24
    }
];

//hourlyWeather[0].time will get you the time for 8:00//
// time is a property inside an object!

// loop over an array of objects:
// for (let i = 0; i < hourlyWeather.length; i++){
//     console.log(`At ${hourlyWeather[i].time} the temperature will be ${hourlyWeather[i].temperature}`);
// }

//using dot notation below makes it easier(doing the same thing as above):
// hourlyWeather.forEach(function(forecast){
//     console.log(`At ${forecast.time} the temperature will be ${forecast.temperature} and feel like ${forecast.feels_like}`);
// });

// forEach loop with arrow syntax
//
// hourlyWeather.forEach(function(forecast =>){
//     console.log(`At ${forecast.time} the temperature will be ${forecast.temperature} and feel like ${forecast.feels_like}`);
// });



let texasInfo = [
    {
        city: "San Antonio",
        latitude: 29.423017,
        longitude: -98.48527,
        timezone: "America/Chicago",
        currentWeather: {
            humidity: 77,
            temp: 82.33,
            feels_like: 88.79,
            clouds: 75
        }
    },
    {
        city: "Houston",
        latitude: 29.7915,
        longitude: -95.093,
        timezone: "America/Chicago",
        currentWeather: {
            humidity: 68,
            temp: 87.44,
            feels_like: 97.7,
            clouds: 75
        }
    }
];

console.log("The temperature in " + texasInfo[1].city + " is " + texasInfo[1].currentWeather.temp);


//
// let fighter = {
//     name: "Arata",
//     hitpoints: 18,
//     maxDamage: 8,
//     attack: function (opponent){
//         console.log(opponent.name + " has " + opponent.hitpoints + " hit points.");
//         console.log(this.name + " attacks!");
//         let damage = Math.ceil(Math.random() * this.maxDamage);
//         opponent.hitpoints -= damage;
//         console.log(this.name + " does " + damage + " points of damage");
//         console.log(opponent.name + " now has " + opponent.hitpoints + " hit points.");
//     }
// }
//
//
// let monster = {
//     name: "Goblin",
//     hitpoints: 8,
//     maxDamage: 6
// }
//
// // this is an object calling a function^^