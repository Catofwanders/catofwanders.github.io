
 $(document).ready(function(){
     if($('body').hasClass('front')) {
        $(".main-nav li a").click(function(event){
       // event.preventDefault();
            event.preventDefault();
            var target = $(this.hash);
            var product = $(target).offset().top - 0;
            $('html, body').animate({scrollTop: product}, 1000);
            return false;
        });
    }
     $('.scroll-top').click(function(){
         $('html, body').animate({scrollTop: 0}, 1000);
     });
    $('.slider').slick({
      vertical: true,
      verticalSwiping: true,
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 5000
    });
    $('.slider2').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });
    $('.btn_slide').click(function(){
      $('.slide').fadeIn();
    });
     
});