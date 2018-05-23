jQuery(function($) {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
        if ($(this).scrollTop() > 80) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });
    $('.back-to-top').click(function() {
        $('body').animate({
            scrollTop: 0,
            easing: 'swing'
        }, 750);
        return false;
    });
});