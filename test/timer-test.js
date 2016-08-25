const assert = require('chai').assert;
const Timer = require('../lib/timer');

describe('Timer', function() {
  it('should have a default time of 1 second', function() {
    var timer = new Timer();
    assert.equal(timer.time, 1000);
  });

  it('should have a start function', function() {
    var timer = new Timer();
    assert.isFunction(timer.countdown);
  });

  it('check countdown decrements by 1', function() {
     var timer = new Timer();
     assert.equal(timer.countdown(10), 9);
  });
});
