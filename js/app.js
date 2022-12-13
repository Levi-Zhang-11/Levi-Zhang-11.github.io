/* Theme Name: Joognu
   Author: Themesdesign
   Version: 1.0.0
   File Description: Main JS file of the template
*/

// ----- STICKY ----- //
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 40) {
        $(".navbar-sticky").addClass("darkheader");
    } else {
        $(".navbar-sticky").removeClass("darkheader");
    }
});

// ----- SCROLLMENU ----- //
$('.navigation-menu a').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 0
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});

// ----- MAIN-MENU ----- //

var scroll = $(window).scrollTop();

$('.navbar-toggle').on('click', function(event) {
    $(this).toggleClass('open');
    $('#navigation').slideToggle(400);
});

$('.navigation-menu>li').slice(-2).addClass('last-elements');

$('.menu-arrow,.submenu-arrow').on('click', function(e) {
    if ($(window).width() < 992) {
        e.preventDefault();
        $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
    }
});

// ----- SCROLLSPY ----- //
$("#navigation").scrollspy({
    offset: 50
});

// ----- TYPED ----- //
$(".element").each(function() {
    var $this = $(this);
    $this.typed({
        strings: $this.attr('data-elements').split(','),
        typeSpeed: 100, // typing speed
        backDelay: 3000 // pause before backspacing
    });
});

// Portfolio filter
$(window).on('load', function() {
    var $container = $('.portfolioContainer');
    var $filter = $('#filter');
    $container.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    });
    $filter.find('a').click(function() {
        var selector = $(this).attr('data-filter');
        $filter.find('a').removeClass('active');
        $(this).addClass('active');
        $container.isotope({
            filter: selector,
            animationOptions: {
                animationDuration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });
});

// Magnific Popup
$('.mfp-image').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-fade',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
    }
});