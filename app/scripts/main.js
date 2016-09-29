$(document).ready(function(){
    
    //alert("hello");

	$('.scrollspy').scrollSpy();

    $("#goTop").on('click', function() {
    	$('html, body').animate({scrollTop: 0}, 'slow');
    });

});

// wowjs
new WOW().init();