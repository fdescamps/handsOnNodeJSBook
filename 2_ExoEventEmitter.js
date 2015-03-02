/*
 * .
 * Build a script that instantiates one Ticker and bind to the "tick" event,
 * printing "TICK" every time it gets one
 */
var EventEmitter = require('events').EventEmitter, util = require('util');
// Here is the Ticker constructor:
var Ticker = function( option1, option2 ) {
  this.option1 = option1;
  this.option2 = option2;
}
util.inherits( Ticker, EventEmitter );

Ticker.prototype.emitEvent = function() {
  this.emit('tick', Math.random() * 1000);
}

var myTicker = new Ticker( 1, 2 );
myTicker.on('tick', function(){
  console.log('TICK');
});

(function schedule(){
  setTimeout(function(){
      //console.log('schedule');
      myTicker.emitEvent();
      schedule();
  }, 1000);
})();
