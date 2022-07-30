(function($) {

    "use strict";

    $(window).on('load', function() {

        //=====================Sticky Navbar=======================
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 200) {
                $('.scrolling-navbar').addClass('top-nav-collapse');
            } else {
                $('.scrolling-navbar').removeClass('top-nav-collapse');
            }
        });

        // =======================Countdown Timer=====================
        jQuery('#clock').countdown('2022/4/8', function(event) {
            var $this = jQuery(this).html(event.strftime('' +
                '<div class="col-md-3 time-entry days"><span>%-D</span> <b>:</b> Days</div> ' +
                '<div class="col-md-3 time-entry hours"><span>%H</span> <b>:</b> Hours</div> ' +
                '<div class="col-md-3 time-entry minutes"><span>%M</span> <b>:</b> Minutes</div> ' +
                '<div class="col-md-3 time-entry seconds"><span>%S</span> Seconds</div> '));
        });

        // closing navbar on click
        function close_toggle() {
            if ($(window).width() <= 768) {
                $('.navbar-collapse a').on('click', function() {
                    $('.navbar-collapse').collapse('hide');
                });
            } else {
                $('.navbar .navbar-inverse a').off('click');
            }
        }
        close_toggle();
        $(window).resize(close_toggle);

        /* WOW Scroll Spy
  ========================================================*/
        var wow = new WOW({
            //disabled for mobile
            mobile: false
        });
        wow.init();

        /* Nivo Lightbox 
        ========================================================*/
        $('.lightbox').nivoLightbox({
            effect: 'fadeScale',
            keyboardNav: true,
        });

        // one page navigation 
        $('.navbar-nav').onePageNav({
            currentClass: 'active'
        });

        /* Counter
        ========================================================*/
        $('.counterUp').counterUp({
            delay: 10,
            time: 1500
        });

        /* Back Top Link active
        ========================================================*/
        var offset = 200;
        var duration = 500;
        $(window).scroll(function() {
            if ($(this).scrollTop() > offset) {
                $('.back-to-top').fadeIn(400);
            } else {
                $('.back-to-top').fadeOut(400);
            }
        });

        $('.back-to-top').on('click', function(event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 600);
            return false;
        });

    });

}(jQuery));