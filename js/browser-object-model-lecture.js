let sayHey = function(){
    let count = 0;
    function hey() {
        if (count < 10) {
            console.log('hey' + count);
            count++;
        } else {
            clearInterval();
        }
    }
    setInterval(hey, 1000);
}
// this will not keep the output from stopping^^^^

//this will stop the output:

// let sayHey = function(){
//     let count = 0;
//     function hey() {
//         if (count < 10) {
//             console.log('hey' + count);
//             count++;
//         } else {
//             clearInterval(theInterval);
//         }
//     }
//     let theInterval = setInterval(hey, 1000);
// }

// this will also work:

function tenHeys(){
    let count = 0;
    let thisWillStop = setInterval(function (){
        if (count < 10){
            console.log("hey" + count);
            count++;
        } else {
            clearInterval(thisWillStop);
        }
    }, 1000);
}

// ** setInterval is a built-in method in the browser

setInterval(wakeUpUser, 5000);

function wakeUpUser(){
    alert("WAKE UUUUUUUPPPPP!!!!!");
}