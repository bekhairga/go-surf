/** @format */

$(function() {
    $(".header__slider").slick({
        infinite: true,
        fade: true,
        prevArrow:
            '<img class="slider-arrows slider-arrows-left"  src="img/backward.svg" alt="arrow-right">',
        nextArrow:
            '<img class="slider-arrows slider-arrows-right" src="img/upward.svg" alt="arrow-right">',
        asNavFor: ".slider-dotshead"
    });
    $(".island__slider").slick({
        prevArrow:
            '<img class="slider-arrows slider-arrows-left"  src="img/backward.svg" alt="arrow-right">',
        nextArrow:
            '<img class="slider-arrows slider-arrows-right" src="img/upward.svg" alt="arrow-right">',
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $(".slider-dotshead").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: ".header-slider",
        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    variableWidth: true
                }
            }
        ]
    });

    $(".surf-slider").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:
            '<img class="slider-arrows slider-arrows-left"  src="img/backward.svg" alt="arrow-right">',
        nextArrow:
            '<img class="slider-arrows slider-arrows-right" src="img/upward.svg" alt="arrow-right">',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 862,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $(".slider-map").slick({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: true
    });
    $(".holder__slider, .shop__slider").slick({
        infinite: true,
        fade: true,
        prevArrow:
            '<img class="slider-arrows slider-arrows-left"  src="img/backward.svg" alt="arrow-right">',
        nextArrow:
            '<img class="slider-arrows slider-arrows-right" src="img/upward.svg" alt="arrow-right">'
    });

    jQuery(
        '<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt="star-logo"></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt="star-logo"></div></div>'
    ).insertAfter(".quantity input");
    jQuery(".quantity").each(function() {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find(".quantity-up"),
            btnDown = spinner.find(".quantity-down"),
            min = input.attr("min"),
            max = input.attr("max");

        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });

    $(".quantity-button ").on("click", function() {
        let summ =
            $(".nights").val() * $(".sum").data("nights") +
            ($(".guests").val() - 1) * $(".sum").data("guests");

        $(".sum").html("$" + summ + " USD");
    });

    let summ =
        $(".nights").val() * $(".sum").data("nights") +
        ($(".guests").val() - 1) * $(".sum").data("guests");

    $(".sum").html("$" + summ + " USD");
    $(".surfboard-box__circle").on("click", function() {
        $(this).toggleClass("active");
    });
    const menu = document.querySelector(".hamburger");
    console.log(menu.classList.contains("is-active"));

    function changeButton() {
        let isActive = menu.classList.contains("is-active");
        let myMenu = document.querySelector(".menu-mini");
        if (isActive) {
            menu.classList.remove("is-active");
            myMenu.style.opacity = "0";
            document.querySelector(".slider-arrows").style.zIndex = "10";
            document.querySelector(".slider-arrows-right").style.zIndex = "10";
        }
        if (!isActive) {
            menu.classList.add("is-active");
            myMenu.style.opacity = "1";
            document.querySelector(".slider-arrows").style.zIndex = "9";
            document.querySelector(".slider-arrows-right").style.zIndex = "9";
        }
    }
    menu.addEventListener("click", changeButton);
});
