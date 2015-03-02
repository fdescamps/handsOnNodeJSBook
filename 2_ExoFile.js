/*
 * .
 * Get the size of a file : Having a file named a.txt, print the size of that file in bytes.
 */
var fs = require( 'fs' );
fs.open( './1_ExoBuffer.js', 'r', function( err, fd ){

  if ( err ) throw err;
  var readBuffer = new Buffer( 1024 ),
      bufferOffset = 0,
      bufferLength = readBuffer.length,
      filePosition = 100;

  fs.read( fd, readBuffer, bufferOffset, bufferLength, filePosition, function( err, readBytes ){
      if( err ) throw err;
      console.log( 'just read ' + readBytes + ' bytes' );
      if( readBytes > 0 ){
        console.log( readBuffer.slice( 10, 14 ) );
      }
  } );

});


fs.open( './1_ExoBuffer.js', 'r', function( err, fd ) {
  if (err) { throw err; }
  var buffer = Buffer(5);
  var readBytes = 0;
  (function readIt() {
    fs.read(fd, buffer, readBytes, buffer.length - readBytes, 10 + readBytes, function(err, bytesRead) {
      if (err) { throw err; }
      readBytes += bytesRead;
      if (readBytes === buffer.length) {
        console.log(buffer);
      } else {
        readIt();
      }
    });
  })();
});
