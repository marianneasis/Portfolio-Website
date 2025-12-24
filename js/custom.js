(function ($) {

  "use strict";

  //PRELOADER
  $(window).on("load", function () {
    const $preloader = $(".preloader");

    setTimeout(function () {
      $preloader.css({
        opacity: "0",
        transition: "opacity 0.5s ease"
      });

      setTimeout(function () {
        $preloader.remove();
      }, 500);
    }, 5000); // matches animation duration
  });

  // COLOR MODE
  $('.color-mode').click(function(){
      $('.color-mode-icon').toggleClass('active')
      $('body').toggleClass('dark-mode')
  })

  // PROJECT CAROUSEL
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop:true,
    margin:10
});

  // SMOOTHSCROLL
  $(function() {
    $('.nav-link, .custom-btn-link').on('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });  

  // TOOLTIP
  $('.social-links a').tooltip();

})(jQuery);
