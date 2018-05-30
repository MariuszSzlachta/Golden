// hamburger menu na media queries
var $menu = $('.main-nav');
var $hamburger = $('.hamburger');

$hamburger.on('click', function(){
  $menu.toggleClass('isActive');
});

// animations

// menu po zaladowaniu strony
$(document).ready(function(){
  $menu.toggleClass('animation-fade-top');
})

// services
var $servicesCards = $('.services-cards');

inView('.services-cards').on('enter', $servicesCards.addClass('animation-fade-bottom'));

