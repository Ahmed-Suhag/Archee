$(function(){
//--bact to top
    $(".back-to-top").click(function(){
       $('html , body').animate({scrollTop:0},1500);
    });
 //----preloader
$(window).on('load',function(){
    $(".preloader").delay(200).fadeOut(500);
})
    
//---Double autoplay
$('.banner-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    asNavFor:'.banner-slider-main',
    autoplaySpeed: 1500,
    infinite:true,
    dots:false,
    arrows:false,
});
    
$('.banner-slider-main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    asNavFor: '.banner-main',
    centerMode:true,
    arrows:false,
    centerPadding:0,
    infinite:true,
    dots:false,
    focusOnSelect: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        centerPadding:false,
      }
    },
  ],
    
    
});

//---counterup
 
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

$('.service-item-main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  centerPadding:true,
  arrows:false,
  dots:true,
  responsive: [
    {
      breakpoint:576,
      settings: {
        slidesToShow: 1,
        vertical:true,
      },
    },
      {
      breakpoint:768,
      settings: {
        slidesToShow: 1,
        vertical:true,
      },
    }
  ]
});
    
    
//testmonial---- //
    
$('.testimonial-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  dots:true,
  centerPadding:true,
  responsive: [
    {
      breakpoint:576,
      settings: {
        slidesToShow: 1,
        vertical:true,
      },
    },
      {
      breakpoint:99,
      settings: {
        slidesToShow: 1,
      },
    }
  ]
});
// blog slider----
$('.blog-main').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  centerPadding:true,
   responsive: [
    {
      breakpoint:576,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint:768,
      settings: {
        slidesToShow: 1,
      },
    }
  ]
});

// bg
$(window).scroll(function(){
    var scrolling =$(this).scrollTop();
    if(scrolling > 200){
        $('.navbar').addClass('bg');
    }
    else{
       $('.navbar').removeClass('bg'); 
    }
    if(scrolling>200){
        $('.back-to-top').fadeIn(500);
    }
    else{
        $('.back-to-top').fadeOut(500);
    }
});

//animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 200
                }, 2000);
                return false;
            }
        }
    });    


//----Responsive js
    
    
    
    
    
    
    
    
    
    
    
    
});