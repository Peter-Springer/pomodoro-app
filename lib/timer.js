const $ = require('jquery');

class Timer {
  constructor(duration, startTime = Date.now()) {
    this.startTime = startTime;
    this.duration = duration * 60000 || 25 * 60000;
    this.endTime = 0;
    this.remainingTime = 30000;
    this.counter = 0;
    this.elapsedTime = 0;
    this.break = 5 * 60000;
    // this.currentStatus = 1;
  }

  timerEndTime() {
    this.endTime = this.startTime + this.duration;
    return this.endTime;
  }

  timerRemainingTime() {
    this.remainingTime = this.endTime - Date.now();
    return this.remainingTime;
  }

  timerElapsed() {
    this.elapsedTime = Date.now() - this.startTime;
    return this.elapsedTime;
  }

}

module.exports = Timer;
