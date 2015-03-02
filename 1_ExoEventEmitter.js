/*
 * .
 * Build a pseudo class named "Ticker" that emits a "tick" event every 1 second
 */
var EventEmitter = require('events').EventEmitter, util = require('util');
// Here is the Ticker constructor:
var Ticker = function( option1, option2 ) {
  this.option1 = option1;
  this.option2 = option2;
}
util.inherits( Ticker, EventEmitter );

Ticker.prototype.emitEvent = function() {
  this.emit('custom event', Math.random() * 1000);
}

var myTicker = new Ticker( 1, 2 );
myTicker.on('custom event', function(){
  console.log('received custome event');
});

(function schedule(){
  setTimeout(function(){
      //console.log('schedule');
      myTicker.emitEvent();
      schedule();
  }, 1000);
})();
