(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  //Owl Carousel
	$('.hackru-carousel').slick({
    dots: true,
    touchMove: true
  });

  $('.shirt-carousel').slick({
    dots: true,
    touchMove: true
  });

  $('.music-carousel').slick({
    dots: true
  });
})(jQuery); // End of use strict

function drive() {
  window.open("https://drive.google.com/drive/folders/1dOsrfo5ygPEOZxh-i-attJyUltQHUgBF?usp=sharing")
}
