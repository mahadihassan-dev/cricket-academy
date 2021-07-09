// Jquery Plugin Initializing
$(document).ready(function(){
    // Banner Slider
    $('.banner_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        arrows: true,
        nextArrow: '<i class="fas fa-arrow-right"></i>',
        prevArrow: '<i class="fas fa-arrow-left"></i>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
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
})