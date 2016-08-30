'use strict';
const assert = require('chai').assert;
const Timer = require('../lib/timer');

describe('Timer', function() {

    beforeEach(function () {
      this.rightNow = Date.now();
      this.dateNow = Date.now;
      Date.now = () => this.rightNow;
    });

    afterEach(function () {
      Date.now = this.dateNow;
    });

  it('should have a start time equal to date.now', function() {
     var timer = new Timer();
     assert.equal(timer.startTime, this.rightNow);
     assert.equal(timer.startTime, Date.now());
   });

  it('should have a default duration time of 1500000 milliseconds/25 minutes', function() {
    var timer = new Timer();
    assert.equal(timer.duration, 1500000);
  });

  it('should have an end time equal to start time plus duration', function() {
    var timer = new Timer();
    timer.timerEndTime();
    assert.equal(timer.endTime, this.rightNow + timer.duration);
  });

  it('should have a remaining time equal to end time minus date.now', function() {
    var timer = new Timer();
    timer.timerRemainingTime();
    assert.equal(timer.remainingTime, timer.endTime - this.rightNow);
  });

  it('should have a default remaining time of 30000/30 seconds', function() {
    var timer = new Timer();
    assert.equal(timer.remainingTime, 30000);
  });

  it('should be able to take in a default time', function() {
    var timer = new Timer(5);
    assert.equal(timer.duration, 300000);
  });
});
