// hamburger menu na media queries
var $nav = $('.nav');
var $menu = $('.main-nav');
var $hamburger = $('.hamburger');
var $menuItems = $('.main-nav li');

$hamburger.on('click', function(){
  $hamburger.toggleClass('close');
  $menuItems.toggleClass('isActive');
  $menu.toggleClass('rolledDown');
});


function toggleNavStyles(){
  if (pageYOffset >= 630){
    $nav.addClass('dark');
  } else {
    $nav.removeClass('dark');
  }
}
document.addEventListener('scroll', toggleNavStyles); 

// smooth scrool
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });
