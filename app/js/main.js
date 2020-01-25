$(function () {
    $(".header__slider").slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows-left"  src="img/backward.svg" alt="arrow-right">',
        nextArrow: '<img class="slider-arrows slider-arrows-right" src="img/upward.svg" alt="arrow-right">',
        asNavFor: '.slider-dots'
    });
    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header-slider'

    })
    $('.surf-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows-left"  src="img/backward.svg" alt="arrow-right">',
        nextArrow: '<img class="slider-arrows slider-arrows-right" src="img/upward.svg" alt="arrow-right">',
    })
});

