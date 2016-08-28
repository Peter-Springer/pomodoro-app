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

  function stopTimer(time) {
  }

  function tick(newTimer) {
    newTimer.timerEndTime();
    newTimer.timerRemainingTime();
    renderTimer(newTimer.remainingTime);
    // stopTimer();
    if (newTimer.endTime <= Date.now()) {
      renderTimer(newTimer.break);
      return {};
    }
    setTimeout(tick, 880, newTimer);
  }

  function alertMessages() {
   if (time.endTime <= Date.now()) {
     var gongNoise = new Audio("gong.wav");
     gongNoise.play();
   }
  }

$('#start-button').on('click', function() {
  $('.decrease-session-time, .increase-session-time').prop('disabled', true);
   $('.decrease-break-time, .increase-break-time').prop('disabled', true);
  // if (newTimer.endTime >= Date.now()) {
    const defaultSession = new Timer();
    defaultSession.duration = .2 * 60000;
    tick(defaultSession);
  // }
  //  let x = defaultSession;
    // tick(new Timer(5));
 });

$('#pause-button').on('click', function() {

});

$('.increase-session-time').on('click', function(){
  let increaseSessionTime = $('.session-duration').text();
  $('.session-duration').text(parseInt(increaseSessionTime) + 1);
   if (increaseSessionTime >= 59) {
     $('.session-duration').text(59);
    let maxTime = 59 * 60000;
     renderTimer(maxTime);
   } else {
     let timeToRender = parseInt(increaseSessionTime) + 1;
     let time = timeToRender * 60000;
     renderTimer(time);
   }
});

$('.decrease-session-time').on('click', function(){
  let decreaseSessionTime = $('.session-duration').text();
   $('.session-duration').text(parseInt(decreaseSessionTime) - 1);
   if (decreaseSessionTime <= 0) {
     $('.session-duration').text(0);
   } else {
     let timeToRender = parseInt(decreaseSessionTime) - 1;
     let time = timeToRender * 60000;
     renderTimer(time);
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
