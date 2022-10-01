const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// .filter

let threeLang = users.filter( user => user.languages.length > 2);

// .map

let emails = users.map(user => user.email);

// .reduce total and average

let TotalYearsOfExperience = users.reduce((experience, user) => experience + user.yearsOfExperience, 0) / users.length;

// longest email

let longestUserEmail = emails.reduce((a, b) => a.length > b.length ? a : b);
let longestUEmail = users.reduce((a, b) => {
    return a.length > b.length ? a : b.email;
});
console.log(longestUserEmail, longestUEmail);

// list of user names in a string

let usersNamesString = users.reduce((acc, user, index) => {
    return index === 0 ? user.name : acc + ", " + user.name;
}, "");
console.log(usersNamesString);