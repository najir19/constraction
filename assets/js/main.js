jQuery(document).ready(function($){
	$(".carousel").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		nav: true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	});

	$(".service").owlCarousel({
		items: 3,
		margin: 25,
		loop: true,
		dots: true,
		autoplay: true,
		responsive: {
			320: {
				items: 1
			},
			768: {
				items: 2
			},
			900: {
				items: 3
			}
		}
	});
	$('#navigation').slimmenu();
	$(".testimonial").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		autoplay: true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	});

	$(".partner-carousel").owlCarousel({
		items: 4,
		margin: 25,
		loop: true,
		dots: true,
		autoplay: true,
		responsive: {
			320: {
				items: 2
			},
			768: {
				items: 3
			},
			900: {
				items: 4
			}
		}
	});

});