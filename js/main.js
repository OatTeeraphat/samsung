$(document).ready(function($) {


    $('#tab_block').easytabs({
        animate: "fast",

    });

    var $owl = $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            }
        }
    })



    $('#tab_block')
        .bind('easytabs:before', function() {
             //$owl.trigger('destroy.owl.carousel');
                $('.owl-carousel').css('opacity','0');
            })
        .bind('easytabs:after', function() {
            //$('.owl-carousel').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
            $('.owl-carousel').css('opacity','1');
            var $owl = $('.owl-carousel');
            $owl.trigger('destroy.owl.carousel');
            $owl.html($owl.find('.owl-stage-outer').html()).removeClass('owl-loaded');
            $owl.owlCarousel({
                loop: true,
                nav: true,
                responsive: {
                    0: {
                        items: 1
                    }
                }
            });
            $owl.trigger('initialize.owl.carousel');
        })


});
