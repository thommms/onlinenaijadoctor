(function ($) {
  "use strict";

  // PRE LOADER
  $(window).load(function () {
    $(".preloader").fadeOut(1000); // set duration in brackets
  });

  // Submit form with id function.
  function submit_by_id() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    if (validation()) {
      // Calling validation function
      document.getElementById("appointment-form").submit(); //form submission
      alert(
        " Name : " +
          name +
          " n Email : " +
          email +
          " n Form Id : " +
          document.getElementById("appointment-form").getAttribute("id") +
          "nn Form Submitted Successfully......"
      );
    }
  }

  //Navigation Section
  $(".navbar-collapse a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Owl Carousel
  $(".owl-carousel").owlCarousel({
    animateOut: "fadeOut",
    items: 1,
    loop: true,
    autoplay: true,
  });

  // PARALLAX EFFECT
  $.stellar();

  // SMOOTHSCROLL
  $(function () {
    $(".navbar-default a, #home a, footer a").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });

  // WOW ANIMATION
  new WOW({ mobile: false }).init();
})(jQuery);
