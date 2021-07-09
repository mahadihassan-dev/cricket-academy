// Jquery Plugin Initializing
$(document).ready(function(){
    // Banner Slider
    $('.banner_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: false,
        arrows: true,
        nextArrow: '<i class="fas fa-arrow-right banner_arrow bnr_next_arrow"></i>',
        prevArrow: '<i class="fas fa-arrow-left banner_arrow bnr_prev_arrow"></i>',
        fade: true,
        cssEase: 'cubic-bezier(0.4, 0, 1, 1)',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
     
    // sticky menu 
    var navoff = $(".header_navbar").offset().top;

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $(".header_navbar").addClass("sticky_menu");
        } else {
            $(".header_navbar").removeClass("sticky_menu");
        }
    });

    // Programme Slider
    $('.programme_slide').slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: false,
        arrows: false,
        fade: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

     // Our Practice Session Video Gallery
     $('.gallery_video_frame').venobox({
        framewidth : '400px',                           
        frameheight: '300px',                           
        border     : '10px',                            
        bgcolor    : '#5dff5e',                    
        numeratio  : false,                              
        infinigall : false,                              
        share      : ['facebook', 'twitter', 'download'],
      });

      // video gallery Slider
    $('.video_gallery_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: false,
        arrows: false,
        fade: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 6,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              dots: false,
              arrows: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              dots: false,
              arrows: false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
})