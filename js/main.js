
/*===============================================================
            Preloader
==================================================================*/
/**
 * @description - with the load event of the window, fades out the preloader gif
 */
$(window).on('load', function () {
   $('#preloader__gif, #preloader').fadeOut(5000, function () {});

});