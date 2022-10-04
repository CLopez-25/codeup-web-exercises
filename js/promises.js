 fetch('https://api.github.com/users/CLopez-25/events/public', {
    headers: {
        'Authorization': 'token ' + GITHUB_PROMISES_TOKEN
    }
}).then( response => response.json())
    .then( date => console.log(new Date(date[0].created_at).toDateString()));

 // jason solution
 // async function getUserLastCommitAsync(username) {
 //     try {
 //         let response = await fetch(`https://api.github.com/users/${username}`);
 //         let events = await response.json();
 //         console.log(events);
 //     }
 //     catch(err) {
 //         console.log(err);
 //     }
 // }

 const wait = ms => {
     return new Promise(response => {
         setTimeout(() => {
             response(`You'll see this after ${ms/1000} seconds`);
         }, ms);
     })
 }
 wait(1000).then(message => console.log(message));
 wait(3000).then(message => console.log(message));
