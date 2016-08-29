'use strict';
const assert = require('chai').assert;
const Timer = require('../lib/timer');

describe('Timer', function() {

    let dateNow;
    let now = Date.now();

    beforeEach(function () {
      dateNow = Date.now;
      Date.now = function () {
        return now;
      };
    });

    afterEach(function () {
      Date.now = dateNow;
    });

  it('should have a start time equal to date.now', function() {
     var timer = new Timer();
     assert.equal(timer.startTime, now);
   });

  it('should have a default duration time of 1500000 milliseconds 25 minutes', function() {
    var timer = new Timer();
    assert.equal(timer.duration, 1500000); 
  });

  it('should have an end time equal to start time plus duration', function() {
   // must freeze time to continue testing
    var timer = new Timer();
    // var startTime = now;
    timer.timerEndTime();
    assert.equal(timer.endTime, 1472490649666);
  });
});
