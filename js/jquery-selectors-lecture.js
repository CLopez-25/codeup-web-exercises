// the new $(document).ready below
$(function (){
    // id selector to alter content
    $("#library").text("jQuery makes life easier");
    // get references to the content^^
    
    // class selector and css method to alter styles
    // single declaration syntax
    // $(".framework").css('border', '1px solid black');
    // multiple declaration syntax
    $(".framework").css({
        'border': '1px solid black',
        'width': 'fit-content'
    });
    // type list with chained methods
    $("p,li").text("Ive taken over.").css("color","hotpink");
    
});
//--------------------------------------------