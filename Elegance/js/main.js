
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
//     callback form fadeIn
    $('.btn_slide').click(function(){
      $('.slide').fadeIn();
    });
 //    WOW ANIMATE INITIALIZE
    if($('.wow').length > 0 && screen.width > 768){    
        new WOW().init();
    }
//    modal
        $('.call_form').click(function(e){
          e.preventDefault(); 
            $('#overlay').show('fast');
             $('.nonebox').animate({'top':'50%'},500,function(){  
             });
         });
        $('.box-close.one, .overlay').click(function(e){
          e.preventDefault(); 
             $('.nonebox').animate({'top':'-1100px'},500,function(){ 
                 $('.overlay').fadeOut('fast'); 
             });
         });
     $('#datetimepicker').datetimepicker({
         dayOfWeekStart: 1,
         i18n:{
          ru:{
           months:[
            'Январь','Февраль','Март','Апрель',
            'Май','Июнь','Июль','Август',
            'Сентябрь','Октябрь','Ноябрь','Декабрь',
           ],
           dayOfWeek:[
            "Пн", "Вт", "Ср", 
            "Чт", "Пт", "Сб", "Вс",
           ]
          }
         },
        });
     jQuery.datetimepicker.setLocale('ru');
});