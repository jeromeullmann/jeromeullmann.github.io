(function ($) {
    $(document).ready(function () {

        // affichage du carrousel (slick)
        $('.carrousel-slick').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 980, // tablet breakpoint
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480, // mobile breakpoint
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        // autres trucs d'affichage... .


    });
})(jQuery);