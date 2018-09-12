$(document).ready (function () {

  const $carousel = $('.carousel');

  $carousel.slick({
    autoplay: true,
    autplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnFocus: false
  });

  let $userPosition = 0;

  $(window).scroll(function() {
    let $pageTop = $(this).scrollTop();
    if (($pageTop - $userPosition) > 50) {
      let $heightOfNavbar = $pageTop - $userPosition;
      $('nav').animate({
        top: -$heightOfNavbar
      }, 150);
      $userPosition = $pageTop;
    } else if (($userPosition - $pageTop) >= 50) {
      $('nav').animate({
        top: 0
      }, 150);
    };
    $userPosition = $pageTop;
  });

  // Create a variable to store how far the user has scrolled and set it equal to 0.
  // Use proper JavaScript naming conventions and give this variable a name that accurately
  // describes the value stored in it. Well refer to this variable as x for our explanation.
  //
  // Use the .scroll() event handler to select the window. Inside of the event handler,
  // include the control flow described below.
  //
  // Create a variable that stores the value of the .scrollTop() property of this.
  // Well refer to this variable as y for our explanation, but you should give it a more appropriate name.
  //
  // If y is greater than x by 50 or more, create a variable that stores the height of the navbar,
  // z (remember to give the variable a descriptive name!).
  //
  // Use the jQuery .animate() function to to change the top offset of the navbar to be the
  // negative height of the navbar over 150ms (using the variable you just created).
  //
  // Then, set x equal to y so that you always have a record of how far the user scrolled last
  // time they finished scrolling. You need this record to compare in your control flow.
  //
  // Otherwise, if x is greater than y by 50 or more, use the .animate() function to change
  // the top offset of the navbar to 0px over 150 milliseconds.
  //
  // Set x to the value of y so that you always have a record of how far the user scrolled
  // last time they finished scrolling. You need this record to compare in your control flow.

  // var lastScrollTop = 0;
  // $(window).scroll(function(){
  //   var scrollTop = $(this).scrollTop();
  //   if (scrollTop - lastScrollTop > 50){
  //     var navHeight = $('.navbar').css('height');
  //     $('.navbar').animate({top: '-' + navHeight}, 150);
  //     lastScrollTop = scrollTop;
  //   } else if (lastScrollTop - scrollTop > 50) {
  //     $('.navbar').animate({top: '0px'}, 150);
  //     lastScrollTop = scrollTop;
  //   }
  // });

});
