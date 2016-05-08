$(function() {
    // Stick the #nav to the top of the window
    var nav = $('#site-nav-main');
    var navHomeY = nav.offset().top;
    var isFixed = false;
    var $w = $(window);

    $w.resize(function() {
        if (!isFixed) {
            navHomeY = nav.offset().top;
        }
    });

    $w.scroll(function() {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
            nav.css({
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                width: nav.width()
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            nav.css({
                position: 'static'
            });
            isFixed = false;
        }
    });
});
