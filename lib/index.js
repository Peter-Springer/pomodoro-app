'use strict';
const Timer = require('./timer');
const Reset = require('./css/reset');
const Style = require('./css/style');
const $ = require('jquery');
const moment = require('moment');

const time = new Timer();

console.log(time.startTime);
console.log(time.duration);
console.log(time.endTime);
console.log(time.remainingTime);
console.log(time.msConversion());
console.log(time.timerEndTime());
console.log(time.timerRemainingTime());
// console.log(time.userStartTime());
  // let timers = [];
function tick() {
  const time = new Timer();
  time.msConversion();
  time.timerEndTime();
  let x = time.endTime - Date.now();
  // time.timerRemainingTime();
  // let sessionTime = time.remainingTime;
  renderTimer(x);
    console.log(1);
    setTimeout(tick, 1000);
  // }, 10000);
}

tick();

  // renderTimer(15000000);
  console.log(moment(90000000000).format('mm:ss'));

  function renderTimer(time) {
    $('.timer').html(
      `<div>current-time:${moment(time).format('mm:ss')}</div>`);
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


$('#start-button').on('click', function() {
  // start();
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
