$(function (){
   $("#clickMe").on('click', function (){
       alert("you clicked me")
   });
   
   $("#create-an-element").on('click', function (){
      $(this).after("<button class='will-this-work>'>Click Me</button>"); 
   });
   
   
});