$("#result").hide();
$( ".highlight" ).hide();
$("#target").submit(function(event){

     var userInput;
     userInput = $("input").val();

     if(userInput === ""){
         $(".result").remove();
         $("#result").fadeIn( "slow").append("<h3 class='text-center text-danger result'>" + "You must Enter a text to check for Palindrome"+"</h3>");

     } else {
         // Lower case str. Remove punctuation
         str = userInput.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
         // Check Palindrome
         if (str !== str.split('').reverse().join('')) {
             $(".result").remove();
             $("#result").fadeIn( "slow").append("<h3 class='text-center text-info result'>"+ userInput + " is not a Palindrome"+"</h3>");

         } else {
             $(".result").remove();
             $("#result").fadeIn( "slow").append("<h3 class='text-center text-info result'>"+ userInput + " is a Palindrome"+"</h3>");
         }
     }

    event.preventDefault();
});
$(".showCode").click(function(){
    $( ".highlight" ).toggle( "slow");
    $( ".showCode" ).toggle( "slow");

});

