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

  sessionTimeUpNoise(sessionTimer) {
    var whaleNoise = new Audio('/sounds/humpback-whale.wav');
    var waveNoise = new Audio('/sounds/waves.wav');
    if (sessionTimer.remainingTime < 21000 && sessionTimer.remainingTime > 20000) {
      waveNoise.play();
    }
    if (sessionTimer.remainingTime < 16000 && sessionTimer.remainingTime > 15000) {
      waveNoise.play();
    }
    if (sessionTimer.remainingTime < 11000 && sessionTimer.remainingTime > 10000) {
      waveNoise.play();
    }
    if (sessionTimer.remainingTime < 6000 && sessionTimer.remainingTime > 5000) {
      waveNoise.play();
    }
    if (sessionTimer.remainingTime < 1000 && sessionTimer.remainingTime > 0) {
      whaleNoise.play();
    }
  }

  breakTimeUpNoise(breakTimer) {
    var whaleNoise = new Audio('/sounds/humpback-whale.wav');
    var waveNoise = new Audio('/sounds/waves.wav');
    if (breakTimer.remainingTime < 21000 && breakTimer.remainingTime > 20000) {
      waveNoise.play();
    }
    if (breakTimer.remainingTime < 16000 && breakTimer.remainingTime > 15000) {
      waveNoise.play();
    }
    if (breakTimer.remainingTime < 11000 && breakTimer.remainingTime > 10000) {
      waveNoise.play();
    }
    if (breakTimer.remainingTime < 6000 && breakTimer.remainingTime > 5000) {
      waveNoise.play();
    }
    if (breakTimer.remainingTime < 1000 && breakTimer.remainingTime > 0) {
      whaleNoise.play();
    }
  }
  // playSoundIfNearInterval(currentTime, sound, ...intervals) {
  //   intervals.forEach(function (interval) {
  //     if (currentTime < interval + 1000 && currentTime > interval) {
  //       sound.play();
  //     }
  //   });
  // }
  //
  // breakTimeUpNoise(breakTimer) {
  //   // var whaleNoise = new Audio('/sounds/humpback-whale.wav');
  //   var waveNoise = new Audio('/sounds/waves.wav');
  //   playSoundIfNearInterval(breakTimer, waveNoise, 5000, 10000, 15000, 20000);
  // }


}

module.exports = Timer;
