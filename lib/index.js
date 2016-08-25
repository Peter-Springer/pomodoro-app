'use strict';
const Timer = require('./timer');
const Reset = require('./css/reset');
const Style = require('./css/style');
const $ = require('jquery');

const time = new Timer();

// time.countdown(10);

// function displayTime() {
//   $('.timer').text(time.countdown(time.duration));
// }

time.startTime(11);
// time.countdown();
