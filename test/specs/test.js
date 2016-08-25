'use strict';
const assert = require('assert');

describe('welcome page', function() {
 it('should be able to grab the page title', function() {
   browser.url('/');
   var title = browser.getTitle();
   assert.equal(title, 'pomodoro-app');
  });
});
describe('buttons', function() {
 it('should have a start button', function() {
   browser.url('/');
   assert.equal(browser.isExisting('#start-button'), true);
   });
 it('should have a pause button', function() {
    browser.url('/');
    assert.equal(browser.isExisting('#pause-button'), true);
    });
  it('should have a decrease button', function() {
     browser.url('/');
     assert.equal(browser.isExisting('.decrease-time'), true);
    });
  it('should have a increase button', function() {
      browser.url('/');
      assert.equal(browser.isExisting('.increase-time'), true);
    });
});
