// the three steps of handling events
// #1 get a reference to the element that will trigger the event

// let theButton = document.querySelector("button");
//
// // #2 write a function that will be triggered by the event
// // a function is a set of instructions. this kind of function that is triggered by an event is called an event handler, or also called callback
// // the function contains the instruction that will run when the event is triggered
//
// function eventHandler(){
//     alert("You clicked me!!");
// }
//
// // #3 register the handler
//
// // we can use addEventListener with two arguments: the type of event and the function that will be triggered
//
// theButton.addEventListener('click', eventHandler);

// below also works:
// theButton.onclick = eventHandler;

// this is the shorthand version:
// document.querySelector("button").addEventListener('click', function (){
//     alert('You clicked me!');
// });


// MINI EXERCISE:

// document.querySelector(".square").addEventListener('click', function(){
//     alert("I am a square");
// })
// and my color is " + window.getComputedStyle(document.querySelector(".square"), null).getPropertyValue('background-color')

let theSquare = document.querySelector('.square');

let theHandler = function(){
    // alert("I am a square " + window.getComputedStyle(document.querySelector(".square"), null).getPropertyValue('background-color'));
}

theSquare.addEventListener('mousemove', function(e){
    // console.log(e.target.className);
    // let theColor = getComputedStyle(e.target).backgroundColor
    // console.log(theColor);
    // document.getElementById("anotherSquare").style.backgroundColor = theColor;
    alert("Event!");
});

let theButton = document.querySelector('button');

document.querySelector('body').addEventListener('resize', function(event){
    alert("Free Flashlights! Just sign up for email newsletter!");
    // console.log(getComputedStyle(event.target).backgroundColor);
})

theButton.onclick = buttonClickFunction;

// Get the user input from a form field
let formInput = document.getElementById("formInput");

formInput.onkeyup = function(){
    console.log(formInput.value);
}
