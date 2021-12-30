$(document).ready(function(){
    $('.team__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_red.svg"</button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_white.svg"</button>'
    });
  });