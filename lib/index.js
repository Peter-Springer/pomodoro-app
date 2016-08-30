'use strict';
const Timer          = require('./timer');
const Reset          = require('./css/reset');
const Style          = require('./css/style');
const $              = require('jquery');
const moment         = require('moment');
const defaultSession = new Timer();
const breakSession   = new Timer(5);
let currentStatus    = 1;
let waveNoise        = new Audio('sounds/waves.wav');
let whaleNoise       = new Audio('sounds/humpback-whale.wav');

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
  newTimer.playSoundIfNearInterval(defaultSession, waveNoise, 5000, 10000, 15000, 20000);
  newTimer.playSoundIfNearInterval(defaultSession, whaleNoise, 0);
  newTimer.playSoundIfNearInterval(breakSession, waveNoise, 5000, 10000, 15000, 20000);
  newTimer.playSoundIfNearInterval(breakSession, whaleNoise, 0);
  if (newTimer.endTime <= Date.now()) {
    stopFlash();
    renderTimerOver();
    enableCustomTimerButtons();
    return {};
  }
  setTimeout(tick, 1000, newTimer);
}

function decreaseTime(minutes, $durationElement) {
  let sessionTime = $durationElement.text();
  $durationElement.text(parseInt(sessionTime) + minutes);
  if (sessionTime <= 0) {
    $durationElement.text(0);
  } else {
    let timeToRender = parseInt(sessionTime) + minutes;
    let time = timeToRender * 60000;
    renderTimer(time);
  }
}

function increaseTime(minutes, $durationElement) {
  let sessionTime = $durationElement.text();
  $durationElement.text(parseInt(sessionTime) + minutes);
  if (sessionTime >= 59) {
    $durationElement.text(59);
    let maxTime = 59 * 60000;
    renderTimer(maxTime);
  } else {
    let timeToRender = parseInt(sessionTime) + minutes;
    let time = timeToRender * 60000;
    renderTimer(time);
  }
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

$('.increase-session-time').on('click', function() {
  defaultSession.duration = defaultSession.duration + parseInt(60000);
  increaseTime(1, $('.session-duration'));
});

$('.decrease-session-time').on('click', function() {
  defaultSession.duration = defaultSession.duration - parseInt(60000);
  decreaseTime(-1, $('.session-duration'));
});

$('.increase-break-time').on('click', function() {
  breakSession.duration = breakSession.duration + parseInt(60000);
  increaseTime(1, $('.break-duration'));
});

$('.decrease-break-time').on('click', function() {
  breakSession.duration = breakSession.duration - parseInt(60000);
  decreaseTime(-1, $('.break-duration'));
});
