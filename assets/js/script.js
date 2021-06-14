$(document).ready(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        headerH = header.innerHeight(),
        scrollOffset = $(window).scrollTop(),
        sections = $('section');


    /* Fixed header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);

    })

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH-headerH) {
            header.addClass("fixed")
        } else {
            header.removeClass("fixed")
        }
    }



    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top-headerH;

        $("nav a").removeClass("active");
        $("#nav").removeClass("active")
        $this.addClass("active");
        $("#nav_toggle").removeClass("active")

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500)
    });

    $(window).on('scroll', function() {
        sections.each(function() {
            var top = $(this).offset().top-headerH,
                bottom = top+$(this).outerHeight();

                if (scrollOffset >= top && scrollOffset <= bottom) {
                    header.find('a').removeClass('active');
                    header.find('a[data-scroll="#'+$(this).attr('id')+'"]').addClass('active')
                }
        })
    })


    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    })

    
    
    /* Collapse */

    $(".accordion__item > .accordion__header").on("click", function(event) {
        event.preventDefault();

        if($(this).parent().hasClass("active")){
            $(this).parent().removeClass("active");
            $(this).siblings(".accordion__content").slideUp(300);
        } else {
            $(".accordion__item > .accordion__header").parent().removeClass("active");
            $(this).parent().addClass("active");
            $(".accordion__content").slideUp(300);
            $(this).siblings(".accordion__content").slideDown(300);
        }
    })

    /* Slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

});