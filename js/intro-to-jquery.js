$("h3").click(function (){
    //takes in a selector and returns an object that represents elements in a page
    $(this).next().slideToggle(500);
});
// to call the jquery function $ can be used as a shortcut and can be used more than once