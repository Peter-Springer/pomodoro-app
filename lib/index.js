'use strict';
const Timer = require('./timer');
const Reset = require('./css/reset');
const Style = require('./css/style');
const $ = require('jquery');
const moment = require('moment');

// console.log(moment(1472322824086).format('h:mm:ss'));
// console.log(moment(1500000).format('mm:ss'));

function renderTimer(time) {
  $('.timer').html(
    `<div class="time-display">${moment(time).format('mm:ss')}</div>`);
  }

$('#start-button').on('click', function() {
  const time = new Timer();

  function tick() {
    time.timerEndTime();
    time.timerRemainingTime();

    renderTimer(time.remainingTime);

    setTimeout(tick, 900);
  }
  tick();
 });

$('#pause-button').on('click', function() {

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
