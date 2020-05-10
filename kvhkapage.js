// $("body").on('scroll',nction(){
// 	$('div').fadeToggle(1000);
// })

$("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


$(".gradient").hover(function(){
  $(".gradient button").css("opacity","1");
},function(){
  $(".gradient button").css("opacity","0");
})

// var op=$("#what").css("opacity");


// $(".fa-whatsapp").click(function(){
//   if(op==1){
//     $("#what").css("opacity","0");
//     op=0;
//   }
//   if(op==0){
//     $("#what").css("opacity","1");
//     op=1;
//     }
// })

$(".fa-whatsapp").hover(function(){
  $("#what").css("opacity","1");
},function(){
  $("#what").css("opacity","0");
})
