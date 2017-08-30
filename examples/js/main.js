$(document).ready(function () {
//
//    /* EXAMPLE FORM 1*/
//    //Problem: Hints are shown even when form is valid
//    //Solution: Hide and show them at appropriate times
//    var $password = $("#password");
//    var $confirmPassword = $("#confirm_password");
//
//    //Hide hints
//    $("#first_example span").hide();
//
//    function isPasswordValid() {
//        return $password.val().length > 8;
//    }
//
//    function arePasswordsMatching() {
//        return $password.val() === $confirmPassword.val();
//    }
//
//    function canSubmit() {
//        return isPasswordValid() && arePasswordsMatching();
//    }
//
//    function passwordEvent() {
//        //Find out if password is valid  
//        if (isPasswordValid()) {
//            //Hide hint if valid
//            $password.next().hide();
//        } else {
//            //else show hint
//            $password.next().show();
//        }
//    }
//
//    function confirmPasswordEvent() {
//        //Find out if password and confirmation match
//        if (arePasswordsMatching()) {
//            //Hide hint if match
//            $confirmPassword.next().hide();
//        } else {
//            //else show hint 
//            $confirmPassword.next().show();
//        }
//    }
//
//    function enableSubmitEvent() {
//        $("#submit").prop("disabled", !canSubmit());
//    }
//
//    //When event happens on password input
//    $password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
//
//    //When event happens on confirmation input
//    $confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
//
//    enableSubmitEvent();
//    /*END EXAMPLE FORM 1*/
//
//
//
//    /* EXAMPLE FORM 2*/
//    //jQuery time
//    var current_fs, next_fs, previous_fs; //fieldsets
//    var left, opacity, scale; //fieldset properties which we will animate
//    var animating; //flag to prevent quick multi-click glitches
//
//    $(".next").click(function () {
//        if (animating) return false;
//        animating = true;
//
//        current_fs = $(this).parent();
//        next_fs = $(this).parent().next();
//
//        //activate next step on progressbar using the index of next_fs
//        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
//
//        //show the next fieldset
//        next_fs.show();
//        //hide the current fieldset with style
//        current_fs.animate({
//            opacity: 0
//        }, {
//            step: function (now, mx) {
//                //as the opacity of current_fs reduces to 0 - stored in "now"
//                //1. scale current_fs down to 80%
//                scale = 1 - (1 - now) * 0.2;
//                //2. bring next_fs from the right(50%)
//                left = (now * 50) + "%";
//                //3. increase opacity of next_fs to 1 as it moves in
//                opacity = 1 - now;
//                current_fs.css({
//                    'transform': 'scale(' + scale + ')',
//                    'position': 'absolute'
//                });
//                next_fs.css({
//                    'left': left,
//                    'opacity': opacity
//                });
//            },
//            duration: 800,
//            complete: function () {
//                current_fs.hide();
//                animating = false;
//            },
//            //this comes from the custom easing plugin
//            easing: 'easeInOutBack'
//        });
//    });
//    $(".previous").click(function () {
//        if (animating) return false;
//        animating = true;
//
//        current_fs = $(this).parent();
//        previous_fs = $(this).parent().prev();
//
//        //de-activate current step on progressbar
//        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
//
//        //show the previous fieldset
//        previous_fs.show();
//        //hide the current fieldset with style
//        current_fs.animate({
//            opacity: 0
//        }, {
//            step: function (now, mx) {
//                //as the opacity of current_fs reduces to 0 - stored in "now"
//                //1. scale previous_fs from 80% to 100%
//                scale = 0.8 + (1 - now) * 0.2;
//                //2. take current_fs to the right(50%) - from 0%
//                left = ((1 - now) * 50) + "%";
//                //3. increase opacity of previous_fs to 1 as it moves in
//                opacity = 1 - now;
//                current_fs.css({
//                    'left': left
//                });
//                previous_fs.css({
//                    'transform': 'scale(' + scale + ')',
//                    'opacity': opacity
//                });
//            },
//            duration: 800,
//            complete: function () {
//                current_fs.hide();
//                animating = false;
//            },
//            //this comes from the custom easing plugin
//            easing: 'easeInOutBack'
//        });
//    });
//    $(".submit").click(function () {
//        return false;
//    })
//    /*END EXAMPLE FORM 2*/
//    /* EXAMPLE FORM 3*/
//    $('.toggle').on('click', function () {
//        $('.container').stop().addClass('active');
//    });
//
//    $('.close').on('click', function () {
//        $('.container').stop().removeClass('active');
//    });
//    /*END EXAMPLE FORM 3*/


    /*
     * MENU BTN ANIMATE
     */
    /*EXAMPLE 1*/
    $('.cmn-toggle-switch').click(function(){
        $(this).hasClass('active') ? $(this).removeClass('active') : $(this).addClass('active') ;
    });
});
