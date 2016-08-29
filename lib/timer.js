const $ = require('jquery');

class Timer {
  constructor(duration, startTime = Date.now()) {
    this.startTime = startTime;
    this.duration = duration * 60000 || 25 * 60000;
    this.endTime = 0;
    this.remainingTime = 30000;
  }

  timerEndTime() {
    this.endTime = this.startTime + this.duration;
    return this.endTime;
  }

  timerRemainingTime() {
    this.remainingTime = this.endTime - Date.now();
    return this.remainingTime;
  }

  playSoundIfNearInterval(currentTime, sound, ...intervals) {
    intervals.forEach(function (interval) {
      if (currentTime.remainingTime < interval + 1000 && currentTime.remainingTime > interval) {
        sound.play();
      }
    });
  }
}

module.exports = Timer;
