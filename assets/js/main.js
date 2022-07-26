//Sticky Header
jQuery(window).scroll(function () {
  var sticky = jQuery("header .header-content-wrapper"),
    scroll = jQuery(window).scrollTop();

  if (scroll >= 250) {
    sticky.addClass("sticky");
    jQuery('body').addClass("scrolled");
  } else {
    sticky.removeClass("sticky");
    jQuery('body').removeClass("scrolled");
  }
});

//Overlay on Menu expansion
jQuery("li.has-child").hover(
  function () {
    jQuery(".scrolled .overlay").addClass("overlay-expanded");
  },
  function () {
    jQuery(".scrolled .overlay").removeClass("overlay-expanded");
  }
);
gsap.registerPlugin(ScrollTrigger);

jQuery(document).ready(function ($) {
  ArticleSlider();
  GallerySlider();
  BlogSlider();
  FounderListSlider();

  //Gsap Animations

  gsap.from('.main-heading', {
    opacity: 0,
    x: -30,
    ease: 'none',
    duration: 1,
    scrollTrigger: {
      trigger: '.main-heading'
    }
  });

  gsap.from('.banner-image img', {
    opacity: 0,
    x: 50,
    ease: 'none',
    duration: 1,
    scrollTrigger: {
      trigger: '.banner-image'
    }
  });
  gsap.from(".blogs h5", {
    scrollTrigger: {
      trigger: ".blogs"
    },
    x: -50,
    opacity: 0,
    duration: 2
  });
  gsap.from(".blog h5", {
    scrollTrigger: {
      trigger: ".blog"
    },
    x: -50,
    opacity: 0,
    duration: 2
  });
  gsap.from(".blogs .blog-image-wrapper", {
    scrollTrigger: {
      trigger: ".blogs .blog-item-wrapper"
    },
    opacity: 0,
    duration: 2
  });
  gsap.from(".article .article-text-container", {
    scrollTrigger: {
      trigger: ".article"
    },
    x: -50,
    opacity: 0,
    duration: 2
  });
  gsap.from(".article .article-image img", {
    scrollTrigger: {
      trigger: ".article .article-text-container"
    },
    x: 50,
    opacity: 0,
    duration: 2
  });

  gsap.from(".article-slider h5", {
    scrollTrigger: {
      trigger: ".article-slider"
    },
    x: -50,
    opacity: 0,
    duration: 2
  });

  gsap.from(".article-slider .article-slider-item", {
    scrollTrigger: {
      trigger: ".article-slider"
    },
    opacity: 0,
    duration: 2
  });

  gsap.from(".section-beige h5", {
    scrollTrigger: {
      trigger: ".section-beige"
    },
    x: -50,
    opacity: 0,
    duration: 2
  });
  gsap.from(".section-beige img", {
    scrollTrigger: {
      trigger: ".section-beige"
    },
    opacity: 0,
    x: 50,
    duration: 1
  });
  gsap.from(".gallery h5", {
    scrollTrigger: {
      trigger: ".gallery"
    },
    x: -50,
    opacity: 0,
    duration: 2
  });
  gsap.from(".gallery .gallery-image", {
    scrollTrigger: {
      trigger: ".gallery"
    },
    opacity: 0,
    duration: 2
  });

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
          breakpoint: 1100,
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

  // Blog Slider

  function BlogSlider() {
    jQuery(".blog .blog-item-wrapper").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      arrows: false,
      dots: false,
      infinite: true,

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
      autoplaySpeed: 1000,
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

//Hamburger Menu

jQuery(".mobile-menu .burger").click(function () {
  jQuery(".primary-menu").toggleClass("active");
  jQuery(".mobile-menu .burger").toggleClass("expanded");
  jQuery("body").toggleClass("menu-expanded");
});



