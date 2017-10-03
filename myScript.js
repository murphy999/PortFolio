/*
|=====================
| NAV FIXED ON SCROLL
|=====================
*/
    
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 800) {
            $(".nav-scroll").addClass("strict");
        } else {
            $(".nav-scroll").removeClass("strict");
        }
    });