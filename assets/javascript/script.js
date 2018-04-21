// ==========================
$(document).ready(function () {
	// ==========================
	var stickyNavbar;
	// ==========================
	header();
	clearing();
	navbar();
	resize();
	// ==========================
	function header() {
		$('.jumbotron').css({ height: ($(window).height()) + 'px' });
	}
	function clearing() {
		$('.clearing').css({ height: (($(window).height())/3) + 'px' });
	}
	// ==========================
	// Navbar Function Group
	function navbar() {
		stickyNavbar();
	}

	// Checks to see if the scroll location is below nave start location
	function stickyNavbar() {
		stickyNavbar = $('.scroll-down').offset().top + 20;

		$(window).on('scroll', function () {
			stickyNavbarHover();
		});

		stickyNavbarHover();
	}
	// Gets the scroll location and changes navbar to sticky
	function stickyNavbarHover() {
		if ($(window).scrollTop() > stickyNavbar) {
			$('body').addClass('fixed ');
		}
		else {
			$('body').removeClass('fixed');
		}
	}
	// ==========================
	function resize() {
		$(window).on('resize', function () {
			stickyNavbar = $('.scroll-down').offset().top + 20;

			$('.jumbotron').css({ height: ($(window).height()) + 'px' });
		});
	}
	// ==========================
	// Contact Form Logic
	// https://bootsnipp.com/snippets/featured/simple-contact-form
	$('#submit').on("click", function () {
		var name = $('#name').val();
		var email = $('#email').val();
		var subject = $('#subject').val();
		var message = $('#message').val();
		window.open(`mailto:christopher.demeke@gmail.com?cc=${email}&subject=${name}: ${subject}&body=${message}`);

	});

	$('#characterLeft').text('140 characters left');
	$('#message').keydown(function () {
		var max = 140;
		var len = $(this).val().length;
		if (len >= max) {
			$('#characterLeft').text('You have reached the limit');
			$('#characterLeft').addClass('red');
			$('#btnSubmit').addClass('disabled');
		}
		else {
			var ch = max - len;
			$('#characterLeft').text(ch + ' characters left');
			$('#btnSubmit').removeClass('disabled');
			$('#characterLeft').removeClass('red');
		}
	});
	// ==========================

});