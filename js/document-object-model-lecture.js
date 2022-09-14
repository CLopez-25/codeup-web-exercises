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
