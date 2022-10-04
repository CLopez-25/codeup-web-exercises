fetch('https://api.github.com/users/CLopez-25', {
    headers: {
        'Authorization': 'token ' + GITHUB_PROMISES_TOKEN
    }
}).then( response => response.json())
    .then( username => console.log(username))
    .catch( error => console.error(error));

