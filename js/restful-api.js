// API -- APPLICATION PROGRAMMING INTERFACE
// A SET OF RULES DEFINING HOW APPLICATIONS AND/OR DEVICES CAN CONNECT TO EACH OTHER AND COMMUNICATE WITH ONE ANOTHER

// REST MEANS REPRESENTATIONAL STATE TRANSFER.
// A PATTERN OF DESIGN PRINCIPLES FOR API'S
// REST API'S COMMUNICATE VIA HTTP REQUESTS

//IN A REST API, COMMUNICATION VIA HTTP REQUESTS IS USED TO PERFORM THE STANDARD SET OF ACTIONS CALLED CRUD
// CREATE, READ, UPDATE, DELETE
// JSON JAVASCRIPT OBJECT NOTATION

// https://glitch.com/continuous-shard-yew

const booksURL = "https://continuous-shard-yew.glitch.me/books"
const moviesURL = "https://continuous-shard-yew.glitch.me/movies"

// the R in crud : read
function getMovies(){
    fetch("https://continuous-shard-yew.glitch.me/movies").then(resp => resp.json()).then(data => console.log(data));
}

getMovies();

// the C in crud: create
const bookToPost = {
    title: "Eleanor of Aquitaine",
    author: {
        firstName: "Ralph",
        lastName: "Turner"
    }
}

const postOptions = {
    method: "POST",
    headers: {
        'Content-type' : 'application/json'
    },
    body: JSON.stringify(bookToPost)
}

function getBooks(){
    fetch(booksURL).then(resp => resp.json()).then(data => console.log(data));
}

getBooks();

// fetch(booksURL, postOptions).then(getBooks);

// The U in crud: updating with put and patch request
// we'll use PUT to replace the entire content 
// we'll use PATCH to modify only part of the entry

let modification = {
    title: "Eleanor of Aquitaine: Queen of France, Queen of England"
}

const patchOptions = {
    method: 'PATCH',
    headers: {
        'Content-type' : 'application/json'
    },
    body: JSON.stringify(modification)
}

// fetch(booksURL + "/1", patchOptions).then(getBooks);

modification = {
    title: "Eleanor of Aquitaine and the Four Kings",
    author: {
        firstName: "Amy",
        lastName: "Kelly"
    }
}

const putOptions = {
    method: 'PUT',
    headers: {
        'Content-type' : 'application/json'
    },
    body: JSON.stringify(modification)
}

// fetch(booksURL + "/1", putOptions).then(getBooks);

// the D in crud: delete

const deleteOptions = {
    method: "DELETE",
    headers: {
        'Content-type' : 'applications/json'
    }
}

fetch(booksURL + "/1", deleteOptions).then(getBooks);

// already know how to load all the movies, go to create, then to delete reference the button of the movie to delete it. use the same idea for the edit button.

