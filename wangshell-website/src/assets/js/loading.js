jQuery(function($) {
    document.onreadystatechange = documentReadyState;
    loading();

    function documentReadyState() {
        if (document.readyState == "complete") {
            completed();
        }
    }

    function loading() {
        $('.loading-box').show();
        $('html,body').addClass('h-hide');
        return;
    }

    function completed() {
        $('.loading-box').hide();
        $('body').addClass('load');
        $('html,body').removeClass('h-hide');
    }
});