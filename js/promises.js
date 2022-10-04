 fetch('https://api.github.com/users/CLopez-25/events', {
    headers: {
        'Authorization': 'token ' + GITHUB_PROMISES_TOKEN
    }
}).then( response => response.json())
    .then( date => console.log(date[0].created_at))
    .catch( error => console.error(error));

function wait(number){

}