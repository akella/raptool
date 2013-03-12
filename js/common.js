$(document).ready(function() {
	
	$('.timeline__comment').click(function(event) {
		$('.timeline__commenttext').toggleClass('is-visible')
	});
	$('.l-comments__toggle').click(function(event) {
		$('body').toggleClass('is-withoutsidebar')
	});
	$('.toolbar__brushes,.toolbar__colors').click(function(event) {
		$(this).children('.toolbar__drop').toggleClass('is-visible');
	});
	
});

$(window).resize(function(event) {
	allcol = $('.l-comments').height();
	commentheight  = allcol - 157;
	$('.conversations').height(commentheight);
});