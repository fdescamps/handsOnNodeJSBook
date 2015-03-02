/**
 * .
 * Exercice 2 : exo 1 + slice buffer between bytes ranging 40 to 60
 */
function randomIntFromInterval(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

var buffer =  new Buffer( 100 );
for( var i = 0 ; i < buffer.length ; i ++ ){
  buffer[i] = randomIntFromInterval( 0, 99 );
}

var newBuffer = buffer.slice(40, 60);

var tmp = '';
for( var i = 0 ; i < newBuffer.length ; i ++ ){
  tmp += newBuffer[i] + ', ';
}
console.log( tmp );
