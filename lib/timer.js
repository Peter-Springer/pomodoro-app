const $ = require('jquery');

class Timer {
  constructor(duration) {
    this.duration = duration || 25;
    this.originalDuration = duration;
    this.startTime = null;
    this.endTime = 0;
    this.remainingTime = 0;
    this.pause = false;
  }

  starter(time = Date.now()) {
    this.startTime = time;
    return this;
  }

  endTime() {
    if(!this.startTime) {return null;}
    this.startTime = this.startTime + this.duration;
    return this;
  }

}

module.exports = Timer;
// startTime(duration) {
//   $('.timer').text(duration);
//   duration--;
//   if (duration >= 0) {
//     setTimeout(this.startTime.bind(this), 1000, duration);
//   }
// }


//function timerDrift() {
// const now = Date.now();
 //setTimeout(()=> console.log(Date.now()-now), 1000);
//}

//setTimeout(function tick() {
//const currentTimer = timers[0];

//if(currentTimer && !currentTimer.isExipired) {
//  renderTimer(currentTimer, $timerElement);
 //}
 //setTimeout(tick, 0);
//}, 0);

// start(time = Date.now()) {
//   this.startTime = time;
//   return this;
// }
//
// get endTime() {
//   if (!this.startTime) {return null;}
//   return this.startTime + this.duration;
// }
//
// get hasBeenStarted() {
//   return !!this.startTime;
// }
//
// get timeRemaining() {
//   return this.endTime - Date.now();
// }
