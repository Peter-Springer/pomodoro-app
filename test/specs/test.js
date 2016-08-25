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
    browser.click('#start-button');
    assert.equal(timer.getText(), 10);
  });
 });

 describe('pause button', function(){
   it('should have a pause button', function() {
     browser.url('/');
     assert.equal(browser.isExisting('#pause-button'), true);
   });
 });

 describe('decrease session time button', function(){
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
 });
