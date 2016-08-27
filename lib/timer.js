const $ = require('jquery');

class Timer {
  constructor(duration, startTime = Date.now()) {
    this.startTime = startTime;
    this.duration = duration || 25;
    this.endTime = 0;
    this.remainingTime = 25;
    this.counter = 0;
  }
  msConversion() {
    this.duration = this.duration * 60000;
    return this.duration;
  }

  timerEndTime() {
    this.endTime = this.startTime + this.duration;
    return this.endTime;
  }

  timerRemainingTime() {
    this.remainingTime = this.endTime - this.startTime;
    return this.remainingTime;
  }

  userStartTime() {
    this.counter = this.remainingTime - this.remainingTime;
    return this.counter;
  }

}






module.exports = Timer;


// starter(time = Date.now()) {
//   this.startTime = time;
//   return this;
// }
//
// end(){
//   if(!this.startTime) {return null;}
//   this.endTime = this.startTime + this.duration * 60000;
// }
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
