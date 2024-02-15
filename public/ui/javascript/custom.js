(function ($) {
    'use strict';

    $(window).scroll(function () {
        // var sticky = $('header'),
        scroll = $(window).scrollTop();

        if (scroll >= 450) {
            // sticky.addClass('sticky-nav');
            $('body').addClass('fixed-content');
        } else {
            // sticky.removeClass('sticky-nav');
            $('body').removeClass('fixed-content');
        }

        //
        $('.timeline-box').each(function() {
              var distance = $(this).offset().top - 150;
              if ($(window).scrollTop() >= distance) {
                $(this).addClass('active');
              } else {
                $(this).removeClass('active');
              }
            });

    });


    jQuery(document).ready(function ($) {

        if($('.sec-delivery-form').length > 0 || $('.sec-delivery-form-w').length > 0){
            $("#phone").intlTelInput({});
            $("#telephone3").intlTelInput({});
            $("#telephone2").intlTelInput({});
            $("#telephone4").intlTelInput({});
            $("#telephone5").intlTelInput({});
            $("#telephone6").intlTelInput({});
            $("#telephone7").intlTelInput({});
            $("#telephone8").intlTelInput({});
            
            
    
            $("#phone, #telephone2, #telephone3, #telephone4, #telephone5,  #telephone6, #telephone7, #telephone8").val('')
        }

      
        




        function videoTrigger() {
            var trigger = $('.video-trigger');
            if (!trigger.length) return;
            trigger.fancybox();
        }
        videoTrigger();

        AOS.init({
            once: true,
        });

        $('.sec-banner .owl-carousel').owlCarousel({
            items: 3,
            // loop: true,
            // autoplay: true,
            animateIn: 'animate__fadeIn',
            animateOut: 'animate__fadeOut',
            margin: 10,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: false,
            autoplayHoverPause: true,
            nav: true,
            items: 1,
            navText: ["<i class='fal fa-arrow-left'></i>", "<i class='fal fa-arrow-right'></i>"],
        });

        $('.sec-logo-box .owl-carousel').owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
            margin: 10,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: false,
            autoplayHoverPause: true,
            nav: true,
            navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
            responsive: {
                0: {
                    items: 2,
                },
                768: {
                    items: 4
                },
                1000: {
                    items: 5
                }
            }
        });

        $('.partners-slider .owl-carousel').owlCarousel({
            items: 3,
            // loop: true,
            autoplay: true,
            margin: 10,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: false,
            autoplayHoverPause: true,
            nav: true,
            navText: ["<i class='far fa-arrow-left'></i>", "<i class='far fa-arrow-right'></i>"],
            responsive: {
                0: {
                    items: 2,
                },
                768: {
                    items: 4
                },
                1000: {
                    items: 6
                }
            }
        });

        $('.sec-testimonials .owl-carousel').owlCarousel({
            items: 3,
            // loop: true,
            autoplay: true,
            margin: 20,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: true,
            autoplayHoverPause: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });

        $('.sec-tech .owl-carousel').owlCarousel({
            items: 2,
            // loop: true,
            autoplay: true,
            margin: 20,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: false,
            autoplayHoverPause: true,
            nav: true,
            navText: ["<i class='far fa-arrow-left'></i>", "<i class='far fa-arrow-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 2
                }
            }
        });

        $('.sec-delivered .owl-carousel').owlCarousel({
            // loop: true,
            autoplay: false,
            margin:30,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: false,
            nav: true,
            navText: ["<i class='far fa-arrow-left'></i>", "<i class='far fa-arrow-right'></i>"],
            autoplayHoverPause:true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

        $('.sec-casestudy .owl-carousel').owlCarousel({
            items: 3,
            // loop: true,
            autoplay: true,
            margin: 10,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: false,
            autoplayHoverPause: true,
            nav: true,
            navText: ["<i class='far fa-arrow-left'></i>", "<i class='far fa-arrow-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });

        $('.sec-news .owl-carousel').owlCarousel({
            items: 3,
            // loop: true,
            autoplay: true,
            margin: 30,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: false,
            autoplayHoverPause: true,
            nav: true,
            navText: ["<i class='far fa-arrow-left'></i>", "<i class='far fa-arrow-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });

        // Start Counter
        $.fn.digits = function () {
            return this.each(function () {
                $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            })
        }
        $('.counter .left-counter span').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');


            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },

                {

                    duration: 10000,
                    easing: 'linear',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        $($this).digits();
                        //alert('finished');
                    }

                });
        });

    });
}(jQuery));