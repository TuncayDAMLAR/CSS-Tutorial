$('.owl-carousel-head').owlCarousel({
    items:1,
    loop:true,
    margin:0,
    nav:false,
    autoplay:true,
    autoplayTimeout:8000,
    autoplayHoverPause:false

})

$('.home-slider-1').owlCarousel({
    items:1,
    loop:false,
    margin:0,
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true

})

$('.home-slider-2 ').owlCarousel({
    items:1,
    loop:false,
    margin:0,
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true

})


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }


  $(window).on('scroll',function(){
    if($('header').length){
        var sticky = 100;
        if($(window).scrollTop() > sticky){
            $('header').addClass('scroll');
        }else{
            $('header').removeClass('scroll');
        }
    }
});