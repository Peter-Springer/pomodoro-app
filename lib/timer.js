const $ = require('jquery');

class Timer {
  constructor(duration, minutes, seconds) {
    this.duration = duration || 10;
    this.minutes = minutes;
    this.seconds = seconds;
    this.pause = false;
  }

  startTime(duration) {
    $('.timer').text(duration);
    duration--;
    if (duration >= 0) {
      setTimeout(this.startTime.bind(this), 1000, duration);
    }
  }

}


module.exports = Timer;
