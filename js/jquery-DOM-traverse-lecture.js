
$(function (){
    const listItems = $("li");
    listItems.each(function (index, element){
        if (index % 2 !== 0){
            $(element).css("font-style", "italic");
        }
    });

    // listItems.css("font-style", "italic");
    
    listItems.first().css("font-size", "larger");
    
    $("li a").last().css("text-decoration", "underline dotted");
    
    $("button").on('click', function (){
       // $("main").children().css("font-family", "sans-serif");
        $("ul").last().children().children().css("text-decoration", "underline dotted");
    //    targeting the last ul and then it targets those children's children meaning the a tags by changing the css
    });
    
    $("h2").css({
        "color": "blue",
        "text-decoration": "underline",
        "cursor": "pointer"
    }).on('click', function (){
        $(this).next().slideToggle();
    });
    
    $("header p").hover(function (){
       $(this).parent().toggleClass("darkMode"); 
    });
});