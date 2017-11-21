$(document).ready(function(){

    $(window).scroll(function(){
        if($(document).scrollTop() > 353) {
            var newPos = $(document).scrollTop() - 343 ;
            $('#left-holder').css( {top:newPos});
        }

        else {
            $('#left-holder').css( {top:0});
        }
    })
})

$(".jumper").on("click", function( e ) {
    
    e.preventDefault();

    $("body, html").animate({ 
        scrollTop: $( $(this).attr('href') ).offset().top 
    }, 600);
    
});