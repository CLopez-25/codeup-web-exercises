let sayHey = function(){
    let count = 0;
    function hey() {
        if (count < 10) {
            console.log('hey' + count);
            count++;
        }
    }
    setInterval(hey, 1000);
}