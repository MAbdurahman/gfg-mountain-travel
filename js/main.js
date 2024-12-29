
/*===============================================================
            Preloader
==================================================================*/
/**
 * @description - with the load event of the window, fades out the preloader GIF
 */
$(window).on('load', function () {
   $('#preloader__gif, #preloader').fadeOut(5000, function () {});

});

/*===============================================================
          ShowAndHide Navbar Scripts
==================================================================*/
$(function() {
   let previousPosition = window.scrollY || window.pageYOffset;
   /**
    * @description - with scroll event of the window, display the show and hide effect
    * of the header__navbar
    */
   window.onscroll = function () {
      const currentPosition = window.scrollY || window.pageYOffset;
      if (previousPosition > currentPosition) {
         document.getElementById('header__navbar').style.top = '0';

      } else {
         document.getElementById('header__navbar').style.top = '-80px';
      }
      previousPosition = currentPosition;

   }
});

/*===============================================================
            Navigation, header__burger, Scripts
==================================================================*/
$(function() {
   /**
    * @description - with the click event of the header__burger, toggles the body,
    * header__navigation, and header__burger with classes active or lock
    */
   function toggleNavigation() {
      $('.header__menu-burger').toggleClass('active');
      $('.header__navigation').toggleClass('active');
      $('body').toggleClass('lock');

   }

   $('.header__menu-burger').on('click tap', function () {
      toggleNavigation();

   });

   /**
    * @description - with the click event of the header__navigation-link or the
    * header__navigation removes classes active and lock.  Thus, closes the navigation
    * and enables scrolling of the body
    */
   function closeNavigation() {
      $('.header__menu-burger').removeClass('active');
      $('.header__navigation').removeClass('active');
      $('body').removeClass('lock');
   }

   $('.header__navigation, .header__navigation-link').on('click tap', function () {
      closeNavigation();
   });

   const windowScreen = window.screen.availWidth;
   const headerSubHeading = document.getElementById('banner__subHeading');
   if (windowScreen < 395) {
      let text = headerSubHeading.innerText;
      text = 'Tours Around The World';
      headerSubHeading.innerText = text;
   }

});
/*===============================================================
          section__tours scripts
==================================================================*/
$(function() {
   /************************* section tours-heading-paragraph *************************/
   const toursHeadingParagraph = ['Tired of the ocean?', 'Tired of the ocean? Are the plains too plain?', 'Tired of the ocean? Are the plains too plain? Come along with us on one of our mountain adventures.', 'Tired of the ocean? Are the plains too plain? Come along with us on one of our mountain adventures. Here are some pictures from people who have had elevated experiences with us.'];
   $('#section__tours-heading-paragraph').waypoint(function () {
      var typed5 = new Typed('#section__tours-heading-paragraph', {
         strings: toursHeadingParagraph,
         typeSpeed: 120,
         backSpeed: 70,
         backDelay: 1000, // cursorChar: '_',
         showCursor: false,
         shuffle: false,
         smartBackspace: true,
         loop: false,
      });

      this.destroy();
   }, {
      offset: 'bottom-in-view',

   });
});

/*===============================================================
          section__packages scripts
==================================================================*/
$(function() {
   /************************* section packages-heading-paragraph *************************/
   const packagesHeadingParagraph = [ 'We offer a variety of mountaineering packages.', 'We offer a variety of mountaineering packages. Whether you\'ve climbed Everest or don\'t even know what a mountain is,', 'We offer a variety of mountaineering packages. Whether you\'ve climbed Everest or don\'t even know what a mountain is, we\'ve got the perfect vacation for you.'];
   $('#section__packages-heading-paragraph').waypoint(function () {
      var typed5 = new Typed('#section__packages-heading-paragraph', {
         strings: packagesHeadingParagraph,
         typeSpeed: 120,
         backSpeed: 70,
         backDelay: 1000, // cursorChar: '_',
         showCursor: false,
         shuffle: false,
         smartBackspace: true,
         loop: false,
      });

      this.destroy();
   }, {
      offset: 'bottom-in-view',

   });
});

/*===============================================================
          section__testimonials scripts
==================================================================*/
$(function() {
   /************************* section testimonials-heading-paragraph *************************/
   const testimonialsHeadingParagraph = ['Believing that we provide a great service makes it easier', 'Believing that we provide a great service makes it easier with customer testimonials like these.', 'Believing that we provide a great service makes it easier with customer testimonials like these. Don\'t just take our word for it!', 'Believing that we provide a great service makes it easier with customer testimonials like these. Don\'t just take our word for it! Here\'s what others think of Mountain Travel.', 'Believing that we provide a great service makes it easier with customer testimonials like these. Don\'t just take our word for it! Here\'s what others think of Mountain Travel. Let our customers speak!' ];
   $('#section__testimonials-heading-paragraph').waypoint(function () {
      var typed5 = new Typed('#section__testimonials-heading-paragraph', {
         strings: testimonialsHeadingParagraph,
         typeSpeed: 120,
         backSpeed: 70,
         backDelay: 1000, // cursorChar: '_',
         showCursor: false,
         shuffle: false,
         smartBackspace: true,
         loop: false,
      });

      this.destroy();
   }, {
      offset: '100%',

   });

   /************************* owl carousel *************************/
   $('.section__testimonials--bottom').owlCarousel({
      loop:true,
      autoplay:true,
      autoplayTimeout:6000,
      margin:10,
      nav:true,
      navText:["<i class='fa-solid fa-arrow-left'></i>",
         "<i class='fa-solid fa-arrow-right'></i>"],
      responsive:{
         0:{
            items:1,
            nav:false
         },
         600:{
            items:1,
            nav:true
         },
         768:{
            items:2
         },
      }
   });
});
/*===============================================================
          section__contact scripts
==================================================================*/

$(function() {
   /************************* section contact-heading-paragraph *************************/
   const messageParagraph = ['Want to know about our upcoming mountain-related events,', 'Want to know about our upcoming mountain-related events, or come to one of our mixers? In the footer,', 'Want to know about our upcoming mountain-related events, or come to one of our mixers? In the footer, subscribe to our newsletter. No spam from us, we promise! ', 'Want to know about our upcoming mountain-related events, or come to one of our mixers? In the footer, subscribe to our newsletter. No spam from us, we promise! Except for the spam we give you to keep up your energy while you\'re hiking through the mountains.', 'Want to know about our upcoming mountain-related events, or come to one of our mixers? In the footer, subscribe to our newsletter. No spam from us, we promise! Except for the spam we give you to keep up your energy while you\'re hiking through the mountains. We have tons of that!']
   $('#section__contact-heading-paragraph').waypoint(function () {
      var typed5 = new Typed('#section__contact-heading-paragraph', {
         strings: messageParagraph,
         typeSpeed: 120,
         backSpeed: 70,
         backDelay: 1000, // cursorChar: '_',
         showCursor: false,
         shuffle: false,
         smartBackspace: true,
         loop: false,
      });

      this.destroy();
   }, {
      offset: '100%',

   });
   /************************* utils effect 08 *************************/
   $('.utils-effect-08').val('');

   $('.js-effect-08 .utils-effect-08').focusout(function () {
      if ($(this).val() !== '') {
         $(this).addClass('has-content');
      } else {
         $(this).removeClass('has-content');
      }
   });
});