$(document).scroll(function() {
    if($(document).width < 1024) // if width < 1024 px header no fixed on phone and tablet 
        return false;

        if ($(document).scrollTop() > $('.full-page').height() / 2) {
            $("header").addClass("fixed");
        } else {
            $("header").removeClass("fixed");
        }
});

$(".up-button").on("click", function() { 
    $("html, body").animate({
        scrollTop: 0,
    }, 'slow')
});

$("#show-menu").on("click", function() {
    $("#hidden-menu").animate({
        "right": 0
    },500);
});

$("#hidden-menu .close").on("click", function() {
    $("#hidden-menu").animate({
       "right": "-300px"
    }, 200);
});

$(".btn_theme").on("click", function() {
    $("body, header, #hidden-menu, footer, i, p, a, h1,h4,h2, .btn_theme").toggleClass("dark_theme");
    if($("body").hasClass("dark_theme")) {
        $(".btn_theme").html('<i class="fa-solid fa-sun"></i>');
    } else {
        $(".btn_theme").html('<i class="fa-solid fa-moon"></i>');

    }
});


$(document).ready(function(){
    $("#slider").slick({
        dots: false,
        prevArrow: '<div class="arrow-prev"><i class="fa-solid fa-arrow-left"></i></div>',
        nextArrow: '<div class="arrow-next"><i class="fa-solid fa-arrow-right"></i></div>',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,

    });
});

