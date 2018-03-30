'use strict';

$(document).ready(() => {
  console.log('script.js running');

// HERO TEXT FADE IN ON PAGE LOAD

$('.starter-template').css('display', 'none');
$('.starter-template').fadeIn(3000)


// DATA CONNECTOR LOGOS FADE IN WHEN IN VIEWPORT

$(window).scroll(function () {
    // console.log($(window).scrollTop());
    var topDivHeight = $('.demo-data-connectors').height();
    var viewPortSize = $(window).height();

    var triggerAt = 150;
    var triggerHeight = (topDivHeight - viewPortSize/2) + triggerAt;

    if ($(window).scrollTop() >= triggerHeight) {
        $('#dc-logo-1').css('visibility', 'visible').hide().fadeIn(1500);
        $(this).off('scroll');
        $('#dc-logo-2').css('visibility', 'visible').hide().fadeIn(2500);
        $(this).off('scroll');
        $('#dc-logo-3').css('visibility', 'visible').hide().fadeIn(3500);
        $(this).off('scroll');
        $('#dc-logo-4').css('visibility', 'visible').hide().fadeIn(4500);
        $(this).off('scroll');
        $('#dc-logo-5').css('visibility', 'visible').hide().fadeIn(4500);
        $(this).off('scroll');
        $('#dc-logo-6').css('visibility', 'visible').hide().fadeIn(4500);
        $(this).off('scroll');
    }

});



})
