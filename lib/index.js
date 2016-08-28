'use strict';
const Timer = require('./timer');
const Reset = require('./css/reset');
const Style = require('./css/style');
const $ = require('jquery');
const moment = require('moment');
const defaultSession = new Timer(.2);
const breakSession = new Timer(.1);

// console.log(moment(1472322824086).format('h:mm:ss'));
// console.log(moment(1500000).format('mm:ss'));

function renderTimer(time) {
  $('.timer').html(
    `<div class="time-display">${moment(time).format('mm:ss')}</div>`);
  }

  function renderTimerOver() {
    $('.timer').html(
      `<div class="time-display">Time Up!</div>`);
    }

  function tick(newTimer) {
    newTimer.timerEndTime();
    newTimer.timerRemainingTime();
    renderTimer(newTimer.remainingTime);
    if (newTimer.endTime <= Date.now()) {
      renderTimerOver();
      return {};
    }
    setTimeout(tick, 880, newTimer);
  }

  function alertMessages(time) {
   if (time.endTime <= Date.now()) {
     var gongNoise = new Audio('gong.wav');
     gongNoise.play();
   }
  }

  let currentStatus = 1;
  let increaseSessionStatus = 1;

$('#start-button').on('click', function() {
  debugger;
  currentStatus++;
  $('.decrease-session-time, .increase-session-time').prop('disabled', true);
   $('.decrease-break-time, .increase-break-time').prop('disabled', true);
    if (currentStatus % 2 === 0) {
      defaultSession.startTime = Date.now();
      tick(defaultSession);
    } else {
      breakSession.startTime = Date.now();
      tick(breakSession);
    }
 });

$('#pause-button').on('click', function() {

});

$('.increase-session-time').on('click', function(){
  increaseSessionStatus++;
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
