
 $(document).ready(function(){
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
    // $(".main-nav").on("click","a", function (event) {
    //   //отменяем стандартную обработку нажатия по ссылке
    //   event.preventDefault();

    //   //забираем идентификатор бока с атрибута href
    //   var id  = $(this).attr('href'),

    //   //узнаем высоту от начала страницы до блока на который ссылается якорь
    //     top = $(id).offset().top;
      
    //   //анимируем переход на расстояние - top за 1500 мс
    //   $('body,html').animate({scrollTop: top}, 1500);
    // });
});