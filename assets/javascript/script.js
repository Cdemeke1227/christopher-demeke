// ==========================
$(document).ready(function () {
	// ==========================
	var stickyNavbar;
	// ==========================
	Header();
	Clearing();
	Navbar();
	Resize();
	// ==========================
	function Header() {
		$('.jumbotron').css({ height: ($(window).height()) + 'px' });
	}
	function Clearing() {
		$('.clearing').css({ height: (($(window).height())/2) + 'px' });
	}
	// ==========================
	// Navbar Function Group
	function Navbar() {
		StickyNavbar();
	}

	// Checks to see if the scroll location is below nave start location
	function StickyNavbar() {
		stickyNavbar = $('.scroll-down').offset().top + 20;

		$(window).on('scroll', function () {
			stickstickyNavbarHover();
		});

		stickstickyNavbarHover();
	}
	// Gets the scroll location and changes navbar to sticky
	function stickstickyNavbarHover() {
		if ($(window).scrollTop() > stickyNavbar) {
			$('body').addClass('fixed ');
		}
		else {
			$('body').removeClass('fixed');
		}
	}
	// ==========================
	function Resize() {
		$(window).on('resize', function () {
			stickyNavbar = $('.scroll-down').offset().top + 20;

			$('.jumbotron').css({ height: ($(window).height()) + 'px' });
		});
	}
	// ==========================
	// Contact Form Logic
	// https://bootsnipp.com/snippets/featured/simple-contact-form

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