(function ($) {
"use strict";
 
    // owlCarousel(release-active)
	$('.release-active').owlCarousel({
		loop:true,
		autoplay:true,
		nav:true,
		navText:['<i class="fas fa-angle-right"></i>','<i class="fas fa-angle-left"></i>'],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			992:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})
	   
// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp',  
	topDistance: '300',  
	topSpeed: 300,  
	animation: 'fade',  
	animationInSpeed: 200,  
	animationOutSpeed: 200,  
	scrollText: '<i class="fas fa-angle-up"></i>', 
	activeOverlay: false,  
});
 
})(jQuery);