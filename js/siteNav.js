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
        var shouldBeFixed = scrollTop >= navHomeY - 20;
        var navHomeHeight = nav.height();
        var pageContent = $(".page-content");
        if (shouldBeFixed && !isFixed) {
            pageContent.css({
                'margin-top': navHomeHeight
            });
            nav.css({
                position: 'fixed',
                top: 20,
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

    // Register on click to toggle trigger for mobile (600px) 
    function toggleTrigger() {  
        if (screen.width <= 600) { 
            $(".trigger").toggle();
        }
    }
    $(".menu-icon")[0].onclick = toggleTrigger; 
});

