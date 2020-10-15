$(document).ready(function() {

	$('.street-photo').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		slide: 'li'
	});

	$('.slider').slick({
		nextArrow:'<button type="button" class="slick-next">Next</button>',
	});
});