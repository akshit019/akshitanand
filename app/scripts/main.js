$(document).ready(function(){
    
    //alert("hello");
    
	$("#goTop").on("click", function() {
		$("body").animate({scrollTop: 0}, 750);
	});

	$("#section-skills").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#skills").offset().top
	    }, 750);
	});

	$("#section-works").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#works").offset().top
	    }, 750);
	});

	$("#section-blog").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#blog").offset().top
	    }, 750);
	});

	$("#section-education").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#education").offset().top
	    }, 750);
	});

	$(".section-contact").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#contact").offset().top
	    }, 1000);
	});



});

// wowjs
new WOW().init();