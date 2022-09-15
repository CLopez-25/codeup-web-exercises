// ** DOCUMENT OBJECT IS A CHILD OF THE BROWSER OBJECT **
// YOU CAN ADD AND REMOVE CLASSES/STYLE PROPERTIES
// DOCUMENT IS A PROPERTY OF WINDOW SO YOU CAN JUST TYPE document.blahblahblah (REFERENCE TO AN OBJECT) / EVENTS (ACTIONS) ARE WHAT COME AFTER THE PERIOD IN CALLING A FUNCTION\ you can have access to any attribute/value on the page


// let accessTheDOM = document.getElementById("dc");
// let showMe = accessTheDOM.innerHTML;
// alert(showMe);
// // ^^ or use console.log(showMe) ^^
// // in DOM the html has to be read first by the browser, do not put the script in the head section!! the innerhtml is a property of the object accessTHEDOM which is stored in the variable showMe
//
// let marvel = document.getElementById("marvel");
//
// let preference = "dc";
//
// let like = document.getElementById("like");
// let dontLike = document.getElementById("dontLike");
// let output = `${dontLike.innerHTML} ${document.getElementById(preference).innerHTML} movies`;
// console.log(output);
//
// accessTheDOM.innerHTML += marvel.innerHTML;
//
// // ^^ you can reassign the value of the object through the javascript to output in the html ^^
//
// marvel.setAttribute('class', 'hotpink');
//
// let hotPinks = document.getElementsByClassName('hotpink');
//
// for (let i = 0; i < hotPinks.length; i++){
//     hotPinks[i].style.fontSize = '2em';
// }

let submitButton = document.getElementById("colorSubmission");
submitButton.onclick = function(){
    let colorInput = document.getElementById("colorPreference");
    let paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++){
        paragraphs[i].style.color = colorInput.value;
    }
}

// <p id="hulk" data-state="hulk" data-strength="super" data-intelligence="low">The Hulk</p>

let theHulk = document.getElementById("hulk");
// let hulkState = theHulk.getAttribute("data-state");
let hulkState = theHulk.dataset.state;
let hulkStrength = theHulk.dataset.strength;
let hulkIntelligence = theHulk.dataset.intelligence;
let hulkSummary = `The hulk is in ${hulkState} state. His strength is ${hulkStrength} and his intelligence is ${hulkIntelligence}.`
theHulk.innerText = hulkSummary;

let transformButton = document.getElementById("transformHulk");
transformButton.onclick = function (){
    let theHulk = document.getElementById("hulk");
    let hulkState = theHulk.dataset.state;
    let hulkStrength = theHulk.dataset.strength;
    let hulkIntelligence = theHulk.dataset.intelligence;
    if (hulkState === "hulk") {
        theHulk.dataset.state = "Bruce Banner";
    } else {
        theHulk.dataset.state = "hulk";
    }
    theHulk.innerText = `The Hulk is in ${hulkState} state. `
}
