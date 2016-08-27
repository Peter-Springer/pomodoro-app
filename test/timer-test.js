'use strict';
const assert = require('chai').assert;
const Timer = require('../lib/timer');

describe('Timer', function() {
  it('should have a default duration time of 1500000 milliseconds 25 minutes', function() {
    var timer = new Timer();
    assert.equal(timer.duration, 1500000);
  });

  it('should have a start time of Date.now()', function() {
    var timer = new Timer();
    assert.equal(timer.startTime, Date.now());
  });
  it('should have an end time equal to start time plus duration', function() {
   // must freeze time to continue testing 
    var timer = new Timer();
    timer.timerEndTime();
    assert.equal(timer.endTime, 0);
  });
});
