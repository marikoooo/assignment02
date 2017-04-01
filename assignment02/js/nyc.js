$(document).ready(function(){
	$(".drawer").drawer();
		$('#menu li').on('click', function() {
		$('.drawer').drawer('close');			
	});
		
	smoothScroll.init({
		selector: '[data-scroll]',
		speed: 500,						
		easing: 'easeInOutQuad',		
		offset: 50,						
		updateURL: false,				
	});

	$('.center').slick({
		dots: true,
		infinite: true,
		speed: 400,
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 768,
				settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1,
			}
			},
			{
				breakpoint: 480,
				settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '20px',
				slidesToShow: 1,
			}
		}
		]
	});
});

			