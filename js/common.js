$(document).ready(function() {
	
	$('.timeline__comment').click(function(event) {
		$('.timeline__commenttext').toggleClass('is-visible')
	});
	$('.l-comments__toggle').click(function(event) {
		$('body').toggleClass('is-withoutsidebar')
	});
});