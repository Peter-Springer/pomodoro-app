'use strict';
const Timer          = require('./timer');
const Reset          = require('./css/reset');
const Style          = require('./css/style');
const $              = require('jquery');
const moment         = require('moment');
const defaultSession = new Timer();
const breakSession   = new Timer(5);
let currentStatus    = 1;

function renderTimer(time) {
  $('.timer').html(
  `<div class="time-display">${moment(time).format('mm:ss')}</div>`);
}

function renderTimerOver() {
  $('.timer').html(
  `<div class="time-up-display">Time Up!</div>`);
}

function sessionFlash() {
  if (defaultSession.remainingTime < 20000 && defaultSession.remainingTime > 0) {
    $('.timer').fadeOut(1000).fadeIn(1000, sessionFlash);
  }
}

function breakFlash() {
  if (breakSession.remainingTime < 20000 && breakSession.remainingTime > 0) {
    $('.timer').fadeOut(1000).fadeIn(1000, breakFlash);
  }
}

function stopFlash() {
  $('.timer').stop(true, true).fadeOut().fadeIn();
}

function enableCustomTimerButtons() {
  $('.decrease-session-time, .increase-session-time').prop('disabled', false);
  $('.decrease-break-time, .increase-break-time').prop('disabled', false);
}

function disableCustomTimerButtons() {
  $('.decrease-session-time, .increase-session-time').prop('disabled', true);
  $('.decrease-break-time, .increase-break-time').prop('disabled', true);
}

function tick(newTimer) {
  newTimer.timerEndTime();
  newTimer.timerRemainingTime();
  renderTimer(newTimer.remainingTime);
  sessionFlash();
  breakFlash();
  newTimer.sessionTimeUpNoise(defaultSession);
  newTimer.breakTimeUpNoise(breakSession);
  if (newTimer.endTime <= Date.now()) {
    stopFlash();
    renderTimerOver();
    enableCustomTimerButtons();
    return {};
  }
  setTimeout(tick, 980, newTimer);
}

$('#start-button').on('click', function() {
  currentStatus++;
  disableCustomTimerButtons();
  if (currentStatus % 2 === 0) {
    defaultSession.startTime = Date.now();
    tick(defaultSession);
  } else {
    breakSession.startTime = Date.now();
    tick(breakSession);
  }
});

$('#reset-button').on('click', function() {
  location.reload();
});

$('.increase-session-time').on('click', function(){
  defaultSession.duration = defaultSession.duration + parseInt(60000);
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
  defaultSession.duration = defaultSession.duration - parseInt(60000);
  let decreaseSessionTime = $('.session-duration').text();
  $('.session-duration').text(parseInt(decreaseSessionTime) - 1);
  if (decreaseSessionTime <= 0) { $('.session-duration').text(0); }
  else {
    let timeToRender = parseInt(decreaseSessionTime) - 1;
    let time = timeToRender * 60000;
    renderTimer(time);
  }
});

$('.increase-break-time').on('click', function(){
  breakSession.duration = breakSession.duration + parseInt(60000);
  let increaseBreakTime = $('.break-duration').text();
  $('.break-duration').text(parseInt(increaseBreakTime) + 1);
  let timeToRender = parseInt(increaseBreakTime) + 1;
  let time = timeToRender * 60000;
  renderTimer(time);
});

$('.decrease-break-time').on('click', function(){
  breakSession.duration = breakSession.duration - parseInt(60000);
  let decreaseBreakTime = $('.break-duration').text();
  $('.break-duration').text(parseInt(decreaseBreakTime) - 1);
  if (decreaseBreakTime <= 0) { $('.break-duration').text(0); }
  let timeToRender = parseInt(decreaseBreakTime) - 1;
  let time = timeToRender * 60000;
  renderTimer(time);
});
