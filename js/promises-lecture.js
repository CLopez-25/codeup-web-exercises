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
            reject("I was rejected!");
        }
    }, 3000);
});

aPromise.then(value => console.log(value)).catch(error=>console.log(error));


const myFetchPromise = fetch("data/murals.json").then(response => {
        console.log(response.status);
        console.log(response.headers);
        console.log(response.url);
        return response.json();
    }
).then(data => console.log(data)).catch(error => console.log("Oh no, it doesn't work!"))
    .finally(()=> console.log("I'm gonna happen no matter what"));

console.log(myFetchPromise);


// fetch('https://api.github.com/users')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

fetch('https://api.github.com/users/CLopez-25', {
    headers: {
        'Authorization': 'token ' + GITHUB_PROMISES_TOKEN
    }
}).then( response => response.json())
    .then( events => console.log(events))
    .catch( error => console.error(error));

const trafficCrashesRequest = fetch("https://data.cityofchicago.org/resource/85ca-t3if.json");
const serviceRequests = fetch("https://data.cityofchicago.org/resource/v6vf-nfxy.json");

Promise.all([trafficCrashesRequest, serviceRequests]).then(function(responses){
    return Promise.all(responses.map(function(response){
        return response.json();
    }));
}).then(function(data){
    console.log(data)
    const crashes = data[0];
    const serviceRequests = data[1];
    const crashStreets = crashes.reduce((accumulatorArray, crashObject) =>{
        accumulatorArray.push(crashObject.street_name);
        return accumulatorArray;
    }, []).map(crashStreet => crashStreet.toLowerCase()).map(crashStreet => {
        return crashStreet.split(" ")[0];
    });
    console.log(crashStreets);
    const serviceRequestStreets = serviceRequests.reduce((accumulatorArray, requestObject) =>{
        accumulatorArray.push(requestObject.street_name);
        return accumulatorArray;
    }, []).map(serviceRequestStreet =>serviceRequestStreet.toLowerCase());
    console.log(serviceRequestStreets);
    const streetsWithCrashesRequests = crashStreets.filter(street =>
        street => serviceRequestStreets.includes(street)
    );
    console.log(streetsWithCrashesRequests);
})
    .catch(function(error){
        console.log(error);
    });