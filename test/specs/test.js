'use strict';
const assert = require('assert');

describe('welcome page', function() {

 it('should be able to grab the page title', function() {
   browser.url('/');
   var title = browser.getTitle();
   assert.equal(title, 'pomodoro-app');
  });
});

describe('start button', function() {

   it('should have a start button', function() {
   browser.url('/');
   assert.equal(browser.isExisting('#start-button'), true);
   });

  it('should start the countdown', function() {
    browser.url('/');
    var timer = browser.element('.timer');
    assert.equal(timer.getText(), '');
    browser.click('#start-button');
    assert.equal(timer.getText(), '25:00');
  });
 });

 describe('reset button', function() {

   it('should have a reset button', function() {
     browser.url('/');
     assert.equal(browser.isExisting('#reset-button'), true);
   });
 });

 describe('decrease session time button', function() {

   it('should have a decrease session time button', function() {
     browser.url('/');
     assert.equal(browser.isExisting('.decrease-session-time'), true);
   });

   it('should decrease the time by one minute', function() {
     browser.url('/');
     browser.click('.decrease-session-time');
     assert.equal(browser.getText('.session-duration'), 24);
   });

   it('should stop the time at 0', function() {
     browser.url('/');
     for (var i = 0; i < 25; i++) {
       browser.click('.decrease-session-time');
     }
     assert.equal(browser.getText('.session-duration'), 0);
   });

   it('should decrease the session time text on the timer by 1', function() {
     browser.url('/');
     browser.click('.decrease-session-time');
     var timer = browser.element('.timer');
     browser.click('#start-button');
     assert.equal(timer.getText(), '24:00');
   });
 });

 describe('increase session time button', function() {

   it('should have an increase session time button', function() {
     browser.url('/');
     assert.equal(browser.isExisting('.increase-session-time'), true);
   });

   it('should increase the time by one minute', function() {
     browser.url('/');
     browser.click('.increase-session-time');
     assert.equal(browser.getText('.session-duration'), 26);
   });

   it('should stop incrementing the time at 59 minutes', function() {
     browser.url('/');
     for (var i = 0; i < 62; i++) {
       browser.click('.increase-session-time');
     }
     assert.equal(browser.getText('.session-duration'), 59);
   });

   it('should increase the session time text on the timer by 1', function() {
     browser.url('/');
     browser.click('.increase-session-time');
     var timer = browser.element('.timer');
     browser.click('#start-button');
     assert.equal(timer.getText(), '26:00');
   });
 });

 describe('decrease break time button', function() {

   it('should have a decrease break time button', function() {
     browser.url('/');
     assert.equal(browser.isExisting('.decrease-break-time'), true);
   });

   it('should decrease the time by one minute', function() {
     browser.url('/');
     browser.click('.decrease-break-time');
     assert.equal(browser.getText('.break-duration'), 4);
   });

   it('should stop the time at 0', function() {
     browser.url('/');
     for (var i = 0; i < 5; i++) {
       browser.click('.decrease-break-time');
     }
     assert.equal(browser.getText('.break-duration'), 0);
   });

   it('should display the user break as they decrease break length', function() {
     browser.url('/');
     browser.click('.decrease-break-time');
     var timer = browser.element('.timer');
     assert.equal(timer.getText(),'04:00');
   });
 });

 describe('increase break time button', function() {
   
   it('should have an increase break time button', function() {
     browser.url('/');
     assert.equal(browser.isExisting('.increase-break-time'), true);
   });

   it('should increase the time by one minute', function() {
     browser.url('/');
     browser.click('.increase-break-time');
     assert.equal(browser.getText('.break-duration'), 6);
   });

   it('should display the user break as they increase break length', function() {
     browser.url('/');
     browser.click('.increase-break-time');
     var timer = browser.element('.timer');
     assert.equal(timer.getText(),'06:00');
   });
 });
