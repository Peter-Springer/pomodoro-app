'use strict';
const Timer = require('./timer');
const Reset = require('./css/reset');
const Style = require('./css/style');
const $ = require('jquery');

const time = new Timer();

$('.pause').hide();

$('#start-button').on('click', function() {
  if (time.pause === false) {
   time.startTime(10);
  } else {
     let x = $('.pause').text();
     $('.pause').hide();
     $('.timer').show();
     time.startTime(x);
     time.pause = false;
   }
 });

$('#pause-button').on('click', function() {
   let currentTime = $('.timer').text();
   $('.timer').hide();
   $('.pause').text(currentTime);
   $('.pause').show();
   time.pause = true;
});

$('.increase-session-time').on('click', function(){
  let increaseSessionTime = $('.session-duration').text();
   $('.session-duration').text(parseInt(increaseSessionTime) + 1);
});

$('.decrease-session-time').on('click', function(){
  let decreaseSessionTime = $('.session-duration').text();
   $('.session-duration').text(parseInt(decreaseSessionTime) - 1);
   if (decreaseSessionTime <= 0) {
     $('.session-duration').text(0);
   }
});

$('.increase-break-time').on('click', function(){
  let increaseBreakTime = $('.break-duration').text();
   $('.break-duration').text(parseInt(increaseBreakTime) + 1);
});

$('.decrease-break-time').on('click', function(){
  let decreaseBreakTime = $('.break-duration').text();
   $('.break-duration').text(parseInt(decreaseBreakTime) - 1);
   if (decreaseBreakTime <= 0) {
     $('.break-duration').text(0);
   }
});
