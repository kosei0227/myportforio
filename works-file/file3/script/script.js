//main-img-carousel
$('.main-carousel').slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4500,
  fade: true,
  speed: 2500
});




$(document).ready(function() {
    $('.center').slick({
  centerMode: true,
  dots: true,
  arrows: false,
  autoplay: true,
  centerPadding: '0',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '110px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 550,
      settings: {
        autoplay: false,
        centerPadding: '80px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        autoplay: false,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});
})

$('.room-info-flex').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 6500,
});

//ハンバーガーメニュー
$(function(){
  $('.btn-trigger').on('click', function() {
    $(this).toggleClass('active');
    $('.nav-mobile').fadeToggle(300);
    $('.mobile-open-background').fadeToggle(300);
  });

  $('.mobile-open-background').on('click',function() {
    $('.btn-trigger').toggleClass('active');
    $('.nav-mobile').fadeToggle(300);
    $('.mobile-open-background').fadeToggle(300);
  })
});