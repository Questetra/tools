(function($) {
    let onResize = function() {
        var w = $(window).width();
        if (w >= 1280) {
            $('body').addClass('drawer-clipped');
            $(".navdrawer")
                .addClass("navdrawer-permanent")
                .addClass("navdrawer-permanent-clipped");
            $('#navdrawerLeft').navdrawer('hide');
        } else {
            $('body').removeClass('drawer-clipped');
            $(".navdrawer")
                .removeClass("navdrawer-permanent")
                .removeClass("navdrawer-permanent-clipped");
        }
    };

    var timer = false;
    $(window).resize(function() {
        if (timer !== false) {
            clearTimeout(timer);
        }
        timer = setTimeout(onResize, 200);
    });

    onResize();

    //$('body').perfectScrollbar();
})(jQuery);