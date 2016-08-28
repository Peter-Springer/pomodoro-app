'use strict';
const assert = require('chai').assert;
const Timer = require('../lib/timer');

describe('Timer', function() {
  beforeEach(function() {
     this.rightNow = Date.now();
     this.dateNow = Date.now;
     Date.now = () => this.rightNow;
   });

   afterEach(function() {
     Date.now = this.dateNow;
   });
it('should have a start time equal to date.now', function() {
     var timer = new Timer();
     var expected = Date.now();
     assert.equal(timer.startTime, expected);
   });
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
   var expected = Date.now();
    var timer = new Timer();
    timer.timerEndTime();
    assert.equal(timer.endTime, 1472414070068);
  });
});
