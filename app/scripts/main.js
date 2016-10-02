$(document).ready(function(){
    
    //alert("hello");

    // preloader
    $(window).on('load', function() { // makes sure the whole site is loaded 
        //$('#status').fadeOut(); // will first fade out the loading animation 
        $('#preloader').delay(1000).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('body').delay(1000).css({'overflow':'visible'});
    });

	$('.scrollspy').scrollSpy();

    $("#goTop").on('click', function() {
    	$('html, body').animate({scrollTop: 0}, 'slow');
    });

    //sidenav button
    $(".button-collapse").sideNav();

});

// wowjs
new WOW().init();