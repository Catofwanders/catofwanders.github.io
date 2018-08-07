$(document).ready(function () {

  //////////
  // Global variables
  //////////

  var _window = $(window);
  var _document = $(document);

  ////////////
  // READY - triggered when PJAX DONE
  ////////////
  function pageReady() {
    legacySupport();
    // updateHeaderActiveClass();
    // initHeaderScroll();

    initPopups();
    initSliders();
    initScrollMonitor();
    initMasks();
    initSelectric();
    initValidations();

    // custom
    // videoEvents(); 
    // scrollTop();
    inputFile();
    customTabs();
    progressBar();
    if(_window.width() > 768){
      initFullPage();
      aboutAnim();
      absAnim();
    }
    // development helper
    _window.on('resize', debounce(setBreakpoint, 200))

    // AVAILABLE in _components folder
    // copy paste in main.js and initialize here
    // initPerfectScrollbar();
    // initLazyLoad();
    // initTeleport();
    // parseSvg();
    // revealFooter();
    // _window.on('resize', throttle(revealFooter, 100));
  }

  // this is a master function which should have all functionality
  pageReady();


  // some plugins work best with onload triggers
  _window.on('load', function () {
    var $preloader = $('#page-preloader'),
    $spinner = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(500).fadeOut('slow');
  })


  //////////
  // COMMON
  //////////

  function legacySupport() {
    // svg support for laggy browsers
    svg4everybody();

    // Viewport units buggyfill
    window.viewportUnitsBuggyfill.init({
      force: false,
      refreshDebounceWait: 150,
      appendToBody: true
    });
  }


  // Prevent # behavior
  _document
    .on('click', '[href="#"]', function (e) {
      e.preventDefault();
    });
    if(_window.width() < 768){
      _document.on('click', '.mobile-navi a', function () { // section scroll
        $('.mobile-navi li').removeClass('active');
        $(this).parent().addClass('active');
        var el = $(this).attr('href').replace('#', '.');
        // console.log(el);
        $('body, html').animate({
          scrollTop: $(el).offset().top - 100
        }, 1000);
        return false;
      });
    }


  // HEADER SCROLL
  // add .header-static for .page or body
  // to disable sticky header
  function initHeaderScroll() {
    _window.on('scroll', throttle(function (e) {
      var vScroll = _window.scrollTop();
      var header = $('.header').not('.header--static');
      var headerHeight = header.height();
      var firstSection = _document.find('.page__content div:first-child()').height() - headerHeight;
      var visibleWhen = Math.round(_document.height() / _window.height()) > 2.5

      if (visibleWhen) {
        if (vScroll > headerHeight) {
          header.addClass('is-fixed');
        } else {
          header.removeClass('is-fixed');
        }
        if (vScroll > firstSection) {
          header.addClass('is-fixed-visible');
        } else {
          header.removeClass('is-fixed-visible');
        }
      }
    }, 10));
  }


  // HAMBURGER TOGGLER
  _document.on('click', '.js-hamburger', function () {
    $(this).toggleClass('is-active');
    $('.mobile-navi').toggleClass('is-active');
    $('div.circle').toggleClass('expand');
		$('.mobile-navi li').toggleClass('animate');
  });

  function closeMobileMenu() {
    $('.js-hamburger').removeClass('is-active');
    $('.mobile-navi').removeClass('is-active');
		$('.circle').removeClass('expand');
		$('.mobile-navi li').removeClass('animate');
  }

  // SET ACTIVE CLASS IN HEADER
  // * could be removed in production and server side rendering when header is inside barba-container
  function updateHeaderActiveClass() {
    $('.header__menu li').each(function (i, val) {
      if ($(val).find('a').attr('href') == window.location.pathname.split('/').pop()) {
        $(val).addClass('is-active');
      } else {
        $(val).removeClass('is-active')
      }
    });
  }

  //////////
  // SLIDERS
  //////////

  function initSliders() {

    // EXAMPLE SWIPER
    new Swiper('.js-slider', {
      wrapperClass: "swiper-wrapper",
      slideClass: "example-slide",
      direction: 'horizontal',
      loop: false,
      watchOverflow: true,
      setWrapperSize: false,
      spaceBetween: 0,
      slidesPerView: 'auto',
      // loop: true,
      normalizeSlideIndex: true,
      // centeredSlides: true,
      freeMode: true,
      // effect: 'fade',
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.example-prev',
      },
      breakpoints: {
        // when window width is <= 992px
        992: {
          autoHeight: true
        }
      }
    })

    // PORTFOLIO SWIPER
    var swiperOptions = {
      navigation: {
        nextEl: '.portfolio__button-next',
        prevEl: '.portfolio__button-prev',
      },
      effect: 'fade',
      
    };

    var swiper_slider = new Swiper(".portfolio__slider", swiperOptions);
  }
  //////////
  // MODALS
  //////////

  function initPopups() {
    // Magnific Popup
    var startWindowScroll = 0;
    $('.js-popup').magnificPopup({
      type: 'inline',
      fixedContentPos: true,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: 'popup-buble',
      callbacks: {
        beforeOpen: function () {
          startWindowScroll = _window.scrollTop();
          // $('html').addClass('mfp-helper');
        },
        close: function () {
          // $('html').removeClass('mfp-helper');
          _window.scrollTop(startWindowScroll);
        }
      }
    });

    $('.js-popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Загрузка #%curr%...',
      mainClass: 'popup-buble',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
      }
    });
  }

  function closeMfp() {
    $.magnificPopup.close();
  }

  ////////////
  // UI
  ////////////

  // textarea autoExpand
  _document
    .one('focus.autoExpand', '.ui-group textarea', function () {
      var savedValue = this.value;
      this.value = '';
      this.baseScrollHeight = this.scrollHeight;
      this.value = savedValue;
    })
    .on('input.autoExpand', '.ui-group textarea', function () {
      var minRows = this.getAttribute('data-min-rows') | 0,
        rows;
      this.rows = minRows;
      rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 17);
      this.rows = minRows + rows;
    });

  // Masked input
  function initMasks() {
    $(".js-dateMask").mask("99.99.99", {
      placeholder: "ДД.ММ.ГГ"
    });
    $("input[type='tel']").mask("+7 (000) 000-0000", {
      placeholder: "+7 (___) ___-____"
    });
  }

  // selectric
  function initSelectric() {
    $('select').selectric({
      maxHeight: 300,
      arrowButtonMarkup: '<b class="button"><svg class="ico ico-select-down"><use xlink:href="img/sprite.svg#ico-select-down"></use></svg></b>',

      onInit: function (element, data) {
        var $elm = $(element),
          $wrapper = $elm.closest('.' + data.classes.wrapper);

        $wrapper.find('.label').html($elm.attr('placeholder'));
      },
      onBeforeOpen: function (element, data) {
        var $elm = $(element),
          $wrapper = $elm.closest('.' + data.classes.wrapper);

        $wrapper.find('.label').data('value', $wrapper.find('.label').html()).html($elm.attr('placeholder'));
      },
      onBeforeClose: function (element, data) {
        var $elm = $(element),
          $wrapper = $elm.closest('.' + data.classes.wrapper);

        $wrapper.find('.label').html($wrapper.find('.label').data('value'));
      }
    });
  }

  ////////////
  // SCROLLMONITOR - WOW LIKE
  ////////////
  function initScrollMonitor() {
    $('.wow').each(function (i, el) {

      var elWatcher = scrollMonitor.create($(el));

      var delay;
      if ($(window).width() < 768) {
        delay = 0
      } else {
        delay = $(el).data('animation-delay');
      }

      var animationClass = $(el).data('animation-class') || "wowFadeUp"

      var animationName = $(el).data('animation-name') || "wowFade"

      elWatcher.enterViewport(throttle(function () {
        $(el).addClass(animationClass);
        $(el).css({
          'animation-name': animationName,
          'animation-delay': delay,
          'visibility': 'visible'
        });
      }, 100, {
        'leading': true
      }));
      // elWatcher.exitViewport(throttle(function() {
      //   $(el).removeClass(animationClass);
      //   $(el).css({
      //     'animation-name': 'none',
      //     'animation-delay': 0,
      //     'visibility': 'hidden'
      //   });
      // }, 100));
    });

  }

  ////////////////
  // FORM VALIDATIONS
  ////////////////

  // jQuery validate plugin
  // https://jqueryvalidation.org
  function initValidations() {
    // GENERIC FUNCTIONS
    var validateErrorPlacement = function (error, element) {
      error.addClass('ui-input__validation');
      error.appendTo(element.parent("div"));
    }
    var validateHighlight = function (element) {
      $(element).parent('div').addClass("has-error");
    }
    var validateUnhighlight = function (element) {
      $(element).parent('div').removeClass("has-error");
    }
    var validateSubmitHandler = function (form) {
      $(form).addClass('loading');
      $.ajax({
        type: "POST",
        url: $(form).attr('action'),
        data: $(form).serialize(),
        success: function (response) {
          $(form).removeClass('loading');
          var data = $.parseJSON(response);
          if (data.status == 'success') {
            // do something I can't test
          } else {
            $(form).find('[data-error]').html(data.message).show();
          }
        }
      });
    }

    var validatePhone = {
      required: true,
      normalizer: function (value) {
        var PHONE_MASK = '+X (XXX) XXX-XXXX';
        if (!value || value === PHONE_MASK) {
          return value;
        } else {
          return value.replace(/[^\d]/g, '');
        }
      },
      minlength: 11,
      digits: true
    }

    ////////
    // FORMS


    /////////////////////
    // REGISTRATION FORM
    ////////////////////
    $(".js-registration-form").validate({
      errorPlacement: validateErrorPlacement,
      highlight: validateHighlight,
      unhighlight: validateUnhighlight,
      submitHandler: validateSubmitHandler,
      rules: {
        last_name: "required",
        first_name: "required",
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 6,
        }
        // phone: validatePhone
      },
      messages: {
        last_name: "Заполните это поле",
        first_name: "Заполните это поле",
        email: {
          required: "Заполните это поле",
          email: "Email содержит неправильный формат"
        },
        password: {
          required: "Заполните это поле",
          email: "Пароль мимимум 6 символов"
        },
        // phone: {
        //     required: "Заполните это поле",
        //     minlength: "Введите корректный телефон"
        // }
      }
    });
  }

  //////////
  // MEDIA Condition helper function
  //////////
  function mediaCondition(cond) {
    var disabledBp;
    var conditionMedia = cond.substring(1);
    var conditionPosition = cond.substring(0, 1);

    if (conditionPosition === "<") {
      disabledBp = _window.width() < conditionMedia;
    } else if (conditionPosition === ">") {
      disabledBp = _window.width() > conditionMedia;
    }

    return disabledBp
  }

  //////////
  // DEVELOPMENT HELPER
  //////////
  function setBreakpoint() {
    var wHost = window.location.host.toLowerCase()
    var displayCondition = wHost.indexOf("localhost") >= 0 || wHost.indexOf("surge") >= 0
    if (displayCondition) {
      var wWidth = _window.width();

      var content = "<div class='dev-bp-debug'>" + wWidth + "</div>";

      $('.page').append(content);
      setTimeout(function () {
        $('.dev-bp-debug').fadeOut();
      }, 1000);
      setTimeout(function () {
        $('.dev-bp-debug').remove();
      }, 1500)
    }
  }

  //////////
  // CUSTOM SCRIPTS
  //////////
  // input type file logic
  function inputFile() {
    $('.file input').on('change', function () {
      $(this).parent("label").find(".file__name").text(this.files[0].name);
    });
  }
  // video events
  function videoEvents() {
    $('.play-btn').on('click', function () {
      var myVid = document.getElementById('company-vid');
      myVid.controls = true;
      myVid.play();
      $(this).hide();
    });
  }
  // tabs logic
  function customTabs() {
    $('.tabs .tabs__nav .tab').on('click', function () {
      if ($(this).hasClass('active')) {} else {
        var currentTab = $(this).attr('data-id');
        $('.tabs .tabs__nav .tab, .tabs .tabs__for .tab').removeClass('active');
        $(this).addClass('active');
        $('.tabs .tabs__for .tab-' + currentTab).addClass('active');
      }
    });
  }
  //    scroll top btn
  function scrollTop() {
    /* When distance from top = 250px fade button in/out */
    $(window).scroll(function () {
      if ($(this).scrollTop() > 250) {
        $('#back-top').fadeIn(300);
      } else {
        $('#back-top').fadeOut(300);
      }
    });

    /* On click scroll to top of page t = 1000ms */
    $('#back-top').click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, 750);
      return false;
    });
  }
  // fullPage init
  function initFullPage() {
    $('#fullpage').fullpage({
      //options here
      autoScrolling: true,
      scrollHorizontally: true,
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      scrollBar: false,
      anchors: ['about', 'experience', 'skills', 'portfolio', 'hello'],
      menu: '#menu',
      responsive: 992,
      afterLoad: function (origin, destination, direction) {
        var params = {
          origin: origin,
          destination: destination,
          direction: direction
        };
        if (destination.anchor == 'experience') {
          expirienceMove();
        }
        if (destination.anchor == 'skills') {
          progressBar();
        }
      }
    });
  }
  // progress bar
  function progressBar() {
    $('progress').each(function () {
      var max = $(this).attr('data-val');
      $(this).val(0).animate({
        value: max
      }, {
        duration: 2000,
        easing: 'easeOutCirc'
      });
    });
  }
  // about animation
  function aboutAnim() {
    var title = document.getElementById('about-wrap').cloneNode(true);
    document.querySelector('.about__text').appendChild(title);
    title.classList.add("overTitle")
    var line = document.createElement('div');
    line.className = 'line';
    document.getElementById('about-wrap').appendChild(line);

    var tl = new TimelineMax({
      repeat: -1
    });
    for (var i = 50; i--;) {
      tl.to(title, R(0.03, 0.17), {
        opacity: R(0, 1),
        y: R(-1.5, 1.5),
        x: R(-1.5, 1.5)
      })
    };
    tl.to(line, tl.duration() / 2, {
      opacity: R(0.1, 1),
      x: R(-window.innerWidth / 2, window.innerWidth / 2),
      ease: RoughEase.ease.config({
        strength: 0.5,
        points: 10,
        randomize: true,
        taper: "none"
      }),
      repeat: 1
    }, 0);
    var dot;
    for (var i = 0; i < 10; i++) {
      dot = document.createElement('div');
      dot.className = 'dot';
      document.getElementById('about-wrap').prepend(dot);
      setDotPosition(dot);
      tl.to(dot, 0.1, {
        opacity: 0,
        repeat: 1,
        yoyo: true,
        onComplete: setDotPosition,
        onCompleteParams: [dot],
        ease: RoughEase.ease.config({
          strength: 0.5,
          points: 10,
          randomize: true,
          taper: "none"
        })
      }, 0);
    }

    function setDotPosition(dot) {
      TweenMax.set(dot, {
        x: R(-window.innerWidth / 2, window.innerWidth / 2),
        y: R(-window.innerHeight, window.innerHeight),
        delay: R(0, 1)
      });
    }

    function R(max, min) {
      return Math.random() * (max - min) + min
    };


    const noise = () => {
      let canvas, ctx;
      let wWidth, wHeight;
      let noiseData = [];
      let frame = 0;
      let loopTimeout;
      // Create Noise
      const createNoise = () => {
        const idata = ctx.createImageData(wWidth, wHeight);
        const buffer32 = new Uint32Array(idata.data.buffer);
        const len = buffer32.length;

        for (let i = 0; i < len; i++) {
          if (Math.random() < 0.5) {
            buffer32[i] = 0xff000000;
          }
        }

        noiseData.push(idata);
      };
      // Play Noise
      const paintNoise = () => {
        if (frame === 9) {
          frame = 0;
        } else {
          frame++;
        }

        ctx.putImageData(noiseData[frame], 0, 0);
      };
      // Loop
      const loop = () => {
        paintNoise(frame);

        loopTimeout = window.setTimeout(() => {
          window.requestAnimationFrame(loop);
        }, (1000 / 25));
      };
      // Setup
      const setup = () => {
        wWidth = window.innerWidth;
        wHeight = window.innerHeight;

        canvas.width = wWidth;
        canvas.height = wHeight;

        for (let i = 0; i < 10; i++) {
          createNoise();
        }

        loop();
      };
      // Reset
      let resizeThrottle;
      const reset = () => {
        window.addEventListener('resize', () => {
          window.clearTimeout(resizeThrottle);

          resizeThrottle = window.setTimeout(() => {
            window.clearTimeout(loopTimeout);
            setup();
          }, 200);
        }, false);
      };
      // Init
      const init = (() => {
        canvas = document.getElementById('noise');
        ctx = canvas.getContext('2d');

        setup();
      })();
    };

    // noise();
  }
  // expirience move
  function objectsParalax(klass, resistance, mouse, left, top) {
    var x = left + ((mouse.clientX - (window.innerWidth / 2)) / resistance);
    var y = top + ((mouse.clientY - (window.innerHeight / 2)) / 20);
    klass.css({
      'left': x + "%",
      'top': y + "px"
    });
  }
  function expirienceMove() {
    if (_window.width() > 992) {
      $('html').mousemove(function (e) {
        objectsParalax($('.experience__wrap .col-md-4:nth-child(1) .experience__card'), 300, e, 0, 0);
        objectsParalax($('.experience__wrap .col-md-4:nth-child(2) .experience__card'), 200, e, 0, 0);
      });
    }
  }


  // abs text animate
  function absAnim() {
    var el = $('.abs-text .letter');
    el.mousemove(function(e){
      objectsParalax($(this), 200, e, 0, 0);
      setTimeout(() => {
        el.css({
          left: 0,
          right: 0
        })
      }, 5000);
    });
  }

});