const $ = require('jquery');

class Timer {
  constructor(duration, minutes, seconds, rest) {
    this.duration = duration || 10;
    this.minutes = minutes;
    this.seconds = seconds;
    this.rest = rest;
  }

  countdown(seconds){
    for (var i = 0; i < this.duration; i++) {
      seconds--;
      if (seconds >= 0) {
        setTimeout(this.countdown.bind(this), 1000, seconds);
      }
    }
  }
  startTime(duration) {
    var time = duration;
    var display = $('.timer').text(10);
  }
}


module.exports = Timer;
