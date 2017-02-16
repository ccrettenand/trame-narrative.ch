/*
    Strongly Typed by HTML5 UP
    html5up.net | @n33co
    Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    skel
        .breakpoints({
            desktop: '(min-width: 737px)',
            tablet: '(min-width: 737px) and (max-width: 1200px)',
            mobile: '(max-width: 736px)'
        })
        .viewport({
            breakpoints: {
                tablet: {
                    width: 1080
                }
            }
        });

    $(function() {

        var	$window = $(window),
            $body = $('body');

        // Disable animations/transitions until the page has loaded.
            $body.addClass('is-loading');

            $window.on('load', function() {
                $body.removeClass('is-loading');
            });

        // Fix: Placeholder polyfill.
            $('form').placeholder();

        // Prioritize "important" elements on mobile.
            skel.on('+mobile -mobile', function() {
                $.prioritize(
                    '.important\\28 mobile\\29',
                    skel.breakpoint('mobile').active
                );
            });

        // CSS polyfills (IE<9).
            if (skel.vars.IEVersion < 9)
                $(':last-child').addClass('last-child');

        // Dropdowns.
            $('#nav > ul').dropotron({
                mode: 'fade',
                noOpenerFade: true,
                hoverDelay: 150,
                hideDelay: 350
            });

        // Off-Canvas Navigation.

            // Title Bar.
                $(
                    '<div id="titleBar">' +
                        '<a href="#navPanel" class="toggle"><span>Navigation mobile</span></a>' +
                    '</div>'
                )
                    .appendTo($body);

            // Navigation Panel.
                $(
                    '<div id="navPanel">' +
                        '<nav>' +
                            $('#nav').navList() +
                        '</nav>' +
                    '</div>'
                )
                    .appendTo($body)
                    .panel({
                        delay: 500,
                        hideOnClick: true,
                        hideOnSwipe: true,
                        resetScroll: true,
                        resetForms: true,
                        side: 'left',
                        target: $body,
                        visibleClass: 'navPanel-visible'
                    });

            // Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
                if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
                    $('#titleBar, #navPanel, #page-wrapper')
                        .css('transition', 'none');

        $('.modal').on('click', '.js-modal-close', function(e) {
            e.preventDefault();
            $('.modal').hide();
        });

        $(document).keyup(function(e) {
          if (e.keyCode == 27) $('.modal').hide();   // esc
        });

        $('.conte-link').on('click', function(e) {
            e.preventDefault();

            var url = $(this).attr('href');

            ga('send', 'event', 'Conte', 'Click', url);

            $.ajax(url).done(function(data) {
                $('.modal--content').html($(data).find('.conte'));
                $('.modal').show();
            })
        });

        $('.apropos-conte').on('click', function(e) {
            if(e.target.nodeName != 'A') {
                e.preventDefault();
                $(this).find('a').click();
            }
        });

        $('.js-button').on('click', function() {
            ga('send', 'event', 'Button', 'Click', $(this).attr('href'));
        });

        $('.js-featured').on('click', function() {
            ga('send', 'event', 'Featured', 'Click', $(this).attr('href'));
        });

        $('.js-contact').on('click', function() {
            ga('send', 'event', 'Contact', 'Click', 'Footer', $(this).data('contact-type'));
        });

        $('.js-menu-contact').on('click', function() {
            ga('send', 'event', 'Contact', 'Click', 'Menu');
        });

        $('.js-rdv-contact').on('click', function() {
            ga('send', 'event', 'Contact', 'Click', 'Therapie', $(this).parents('.therapie').attr('id'));
        });

        $('#banner-5ans').on('click', function(e) {
            if(e.target.nodeName != 'A') {
                e.preventDefault();
                document.location = $(this).find('a').attr('href');
            }
        })
    });

})(jQuery);
