'use strict';
const Timer = require('./timer');
const Reset = require('./css/reset');
const Style = require('./css/style');
const $ = require('jquery');
const moment = require('moment');

const time = new Timer();

function start() {
  debugger;
  // let timers = [];
  setTimeout(function tick() {
    // const currentTimer = timers[0];
    time.starter();
    let current = time.startTime;
    // time.endTime();
    // let endTimes = time.endTime();

    renderTimer(current, '.timer');
    // renderTimer(endTime, '.timer');
    // if(currentTimer && !currentTimer.isExipired) {
    // }
    setTimeout(tick, 0);
  }, 0);
}

// function formatTime() {
//   debugger;
//   var tempTime = Date.now();
//   var milliseconds = tempTime % 1000;
//   tempTime = Math.floor(tempTime / 1000);
//   var seconds = tempTime % 60;
//   tempTime = Math.floor(tempTime / 60);
//   var minutes = tempTime % 60;
//   tempTime = Math.floor(tempTime / 60);
//   var hours = Math.floor(tempTime % 60);
//   var timer = hours + ' : ' + minutes + ' : ' + seconds + '.';
//   return timer;
// }
//
// console.log(formatTime(Date.now()));

function renderTimer(time, element) {
  $(element).html(
    `<div>current-time:${moment(time).format('h:mm:ss')}</div>`);
}

$('#start-button').on('click', function() {
  start();
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
