$(document).ready(function () {
    // simple scroll on page
        $('nav a, .mob_menu a').click(function (event) {
            // event.preventDefault();
            event.preventDefault();
            var target = $(this.hash);
            var product = $(target).offset().top - 0;
            $('html, body').animate({
                scrollTop: product
            }, 1000);
            return false;
        });
    /*mask*/
    $('input[type="tel"]').mask('+7 (999) 999-99-99');
    //    scroll top btn
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-top').animate({
                    'bottom': '30px'
                }, 400);
            } else {
                $('#back-top').stop(true).animate({
                    'bottom': '-100px'
                }, 400);
            }
        });

        // scroll body to 0px on click
        $('#back-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
    //    mobile menu
    $('.mob_menu_btn').click(function () {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.mob_menu_wrapper').slideUp("slow");
        }
        else{
            $(this).addClass('active');
            $('.mob_menu_wrapper').slideDown("slow");
        }
    });
    // close modal
    $('.modal-overflow, .box-close, .close-modal').click(function () {
        $('body').css('overflow', 'auto');
        $('.modal-content').css('top', '-100%');
        setTimeout(function () {
            $('.modal-wrapper').removeClass('active');
        }, 100);
    });
});
//    modal
function call_modal(params) {
    $('body').css('overflow', 'hidden');
    $(params).toggleClass('active');
    if ($(window).width() < 768) {
        $('.modal-content').css('top', '34px');
    } else {
        $('.modal-content').css('top', 'inherit');
    }
};