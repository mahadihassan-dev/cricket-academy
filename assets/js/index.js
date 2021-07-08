// Jquery Plugin Initializing
$(document).ready(function(){
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
})