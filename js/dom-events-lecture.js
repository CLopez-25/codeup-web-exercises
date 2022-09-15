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
document.querySelector("div").addEventListener('click', function (){
    alert("I am a square");
});
