$(function () {
    $('nav').hover(
        function () {
            $('body').addClass("navhover");
        },
        function () {
            $('body').removeClass("navhover");
        }
    );
    $('.header-btn .menu').click(function () {
        if ($('header').hasClass('active')) {
            $('header').removeClass('active');
            $('body').removeClass('showmenu');
        } else {
            $('header').addClass('active');
            $('body').addClass('showmenu');
        }
    });

    $('nav li').click(function () {
        $('header').removeClass('active');
        $('body').removeClass('showmenu');
        $('nav li').removeClass('active');
        $(this).addClass('active');
    });

    window.addEventListener('orientationchange', function (e) {
        if (window.orientation == 0 || window.orientation == 180) {
            $('.popScreenH').hide();
            $('html,body').removeClass('h-hide');
        } else if (window.orientation == 90 || window.orientation == -90) {
            $('.popScreenH').show();
            $('html,body').addClass('h-hide');
        }
    });
});