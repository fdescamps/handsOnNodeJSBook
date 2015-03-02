/*
 * .
 * Exo 1 + Copy bytes ranging 40 to 60
 */
function randomIntFromInterval(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

var buffer =  new Buffer( 100 );
for( var i = 0 ; i < buffer.length ; i ++ ){
  buffer[i] = randomIntFromInterval( 0, 99 );
}

var slice = new Buffer( 20 );
var targetStart = 0, sourceStart = 40, sourceEnd = 60;
buffer.copy( slice, targetStart, sourceStart, sourceEnd );

var tmp = '';
for( var i = 0 ; i < slice.length ; i ++ ){
  tmp += slice[i] + ', ';
}
console.log( tmp );
