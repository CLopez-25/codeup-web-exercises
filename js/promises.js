 fetch('https://api.github.com/users/CLopez-25/events/public', {
    headers: {
        'Authorization': 'token ' + GITHUB_PROMISES_TOKEN
    }
}).then( response => response.json())
    .then( date => console.log(new Date(date[0].created_at).toDateString()));

 const wait = ms => {
     return new Promise(response => {
         setTimeout(() => {
             response(`You'll see this after ${ms/1000} seconds`);
         }, ms);
     })
 }
 wait(1000).then(message => console.log(message));
 wait(3000).then(message => console.log(message));
 