let currentWeather = {
    humidity: 77,
    temp: 82.33,
    feels_like: 88.79,
    clouds: 75,
    description: "cloudy"
}
console.log(currentWeather.temp);
// this is what .length means^
// current weather is a reference to the object
// object is the current weather (inside curly brace)
console.log(currentWeather.description);

let fighter = {
    name: "Arata",
    hitpoints: 18,
    maxDamage: 8,
    attack: function (opponent){
        console.log(opponent.name + " has " + opponent.hitpoints + " hit points.");
        console.log(this.name + " attacks!");
        let damage = Math.ceil(Math.random() * this.maxDamage);
        opponent.hitpoints -= damage;
        console.log(this.name + " does " + damage + " points of damage");
        console.log(opponent.name + " now has " + opponent.hitpoints + " hit points.");
    }
}


let monster = {
    name: "Goblin",
    hitpoints: 8,
    maxDamage: 6
}

// this is an object calling a function^^