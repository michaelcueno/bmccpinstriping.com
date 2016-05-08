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
        var navHomeHeight = nav.height();
        var pageContent = $(".page-content");
        if (shouldBeFixed && !isFixed) {
            pageContent.css({
                'margin-top': navHomeHeight
            });
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
            pageContent.css({
                'margin-top': 0
            });
            nav.css({
                position: 'static'
            });
            isFixed = false;
        }
    });
});