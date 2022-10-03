$.get("data/murals.json", function (data){
    console.log(data)
});
//
// // fetch api
//
// fetch("data/murals.json").then(function (response){
//     return response.json();
// }).then(function (data){
//     console.log(data);
// });
//
// fetch("data/murals.json").then(resp => resp.json()).then(data => console.log(data));

// callback: a function passed as an argument to anohter function; can run after another function has finished running.

// function greeter(greeting, name, displayFunction){
//     greeting = `${greeting}, ${name}!`;
//     displayFunction(greeting);
// }
//
function displayToOutputDiv(output){
    $("#output").html(output);
}

// greeter("hola", "javier", displayToOutputDiv);

// setTimeout( () => greeter("aloha", "jason", displayToOutputDiv),3000)
// setTimeout(function (){
//     greeter("aloha", "jason", displayToOutputDiv)
// }, 3000);

// setTimeout(greeter, 3000, "yo", "dude", displayToOutputDiv)
//the first two parameters are the callback and then the interval

// function sayHello(greeting, name){
//     return `${greeting}, ${name}`;
// }

// let greeting = sayHello("Hello", "Javier");
//
// function displayOutput(output){
//     $("#output").html(output);
// }
// displayOutput(greeting);


// const greetings = [ "Salutations", "Shoutout", "Hello", "Hullo", "Hail", "Hey", "Hi", "Aloha", "Hola", "Bonjour", "Howdy", "Namaste", "Ohayo", "Ni hao"];
// const names = ['David', 'Jay', 'Bianca', 'Laura', 'Kenneth', 'Cody', 'Justin', 'Javier', 'Dane', 'Casey', 'Mark', 'Ry', 'Jordy'];
// function generateGreeting(greetingsArray, namesArray, displayFunction){
//     let greeting = greetingsArray[Math.floor(Math.random() * greetingsArray.length)];
//     const name = namesArray[Math.floor(Math.random() * namesArray.length)];
//     greeting = `${greeting}, ${name}!`;
//     displayFunction(greeting);
// }
//
// generateGreeting(greetings, names, displayToOutputDiv);
// setInterval(generateGreeting, 1000, greetings, names, displayToOutputDiv);

const aPromise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        if (Math.random() > 0.5){
            resolve("I was fulfilled!");
        } else {
            reject(" I was rejected");
        }
    }, 3000)
});

aPromise.then( value => console.log(value)).catch(error => console.log(error));

fetch("data/murals.json").then(response => response.json()).then(data => console.log(data)).catch(error => console.log("Oh no, it doesnt work!"));

// a fetch call returns a promise 