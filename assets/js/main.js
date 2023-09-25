(function ($) {
  "use strict";

  // preloader
  $(window).on('load', function () {
    // Hide the preloader when the page is fully loaded
    $('.preloader').fadeOut('slow');
  });




  //banner
  $('.banner__active').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    fade: true, // Add this line to enable the fade animation
  });

  //marquee
  const marquee = document.querySelector('.marquee');

  marquee.addEventListener('mouseenter', () => {
    marquee.stop();
  });

  marquee.addEventListener('mouseleave', () => {
    marquee.start();
  });


  //banner
  $('.review__active').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  //games__active
  $('.games__active').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 6,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  //result__slider__active
  $('.result__slider__active').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000, // Set the autoplay speed in milliseconds (e.g., 1000ms = 1 second)
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true, // Enable the fade effect
    cssEase: 'linear' // Optional: Set the CSS easing for the fade effect
  });

  // bottom to top
  $(document).ready(function () {
    $('.bottom__to__top').slick({
      vertical: true, // Enable vertical slider
      slidesToShow: 5, // Number of slides to show at once
      slidesToScroll: 1, // Number of slides to scroll at a time
      infinite: true, // Loop the slider
      autoplay: true, // Auto-play the slider
      autoplaySpeed: 0, // Time between slides in milliseconds
      dots: false,
      arrows: false,
      cssEase: "linear",
      pauseOnHover: true,
      speed: 1000,
    });
  });


  // promo code
  const promoField = document.getElementById('promoField');
  const promoCodeInput = document.getElementById('promoCodeInput');

  promoField.addEventListener('click', function () {
    // Toggle the visibility of the promo__code input field
    if (promoCodeInput.style.display === 'none' || promoCodeInput.style.display === '') {
      promoCodeInput.style.display = 'block';
    } else {
      promoCodeInput.style.display = 'none';
    }
  });

  // select language

  // mega win game

})(jQuery);