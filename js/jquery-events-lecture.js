$(function (){
   $("#clickMe").on('click', function (){
       alert("you clicked me")
   });
   
   $("#create-an-element").on('click', function (){
      $(this).after("<button class='will-this-work>'>Click Me</button>"); 
   });
   
   // this won't work because you are trying to register an event handler with an element that doesnt exist yet:
   // $(".will-this-work").on('click', function (){
   //     alert(":( this didnt work");
   // });
    
    // this will work/ this is a delegated event
    $("#dynamic-content").on('click', '.will-this-work', function (){
       alert("ooooooooo yeeeeeeeeaaaaahhhhh");
    });
    
    $(".box").hover(function(){
       $(this).addClass("hotpink");
    }, 
     function(){
        $(this).removeClass("hotpink");
     });
    
    $(document).keydown(function(){
        alert("you just pressed a key down");
    });
    
});