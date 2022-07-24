jQuery(window).scroll(function () {
  var sticky = jQuery("header .header-content-wrapper"),
    scroll = jQuery(window).scrollTop();

  if (scroll >= 250) {
    sticky.addClass("sticky");
  } else {
    sticky.removeClass("sticky");
  }
});

jQuery("li.has-child").hover(
  function () {
    jQuery("body").addClass("overlay-expanded");
  },
  function () {
    jQuery("body").removeClass("header-expanded");
  }
);

jQuery(document).ready(function ($) {
  ArticleSlider();
  GallerySlider();
  BlogSlider();
  FounderListSlider();
  // Article Slider
  function ArticleSlider() {
    jQuery(".article-slider .slider-wrapper").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      centerMode: false,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 920,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  // Gallery Slider
  function GallerySlider() {
    jQuery(".gallery .gallery-wrapper").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: false,
      arrows: false,
      dots: false,
      speed: 300,
      infinite: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  // Blog Slider
  function BlogSlider() {
    jQuery(".blog .blog-item-wrapper").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      arrows: false,
      dots: false,
      speed: 300,
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: false,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  //FounderList Slider
  function FounderListSlider() {
    jQuery(".section-beige .image-wrapper .image-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      arrows: false,
      dots: false,
      speed: 300,
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: false,
      asNavFor: ".slider-nav",
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
    jQuery(".slider-nav").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      asNavFor: ".section-beige .image-wrapper .image-slider",
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      variableWidth: true,
    });
  }
});
jQuery(".mobile-menu .burger").click(function () {
  jQuery(".primary-menu").toggleClass("active");
  jQuery(".mobile-menu .burger").toggleClass("expanded");
  jQuery("body").toggleClass("menu-expanded");
});
