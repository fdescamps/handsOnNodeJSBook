/*
 * .
 * Get the size of a file : Having a file named a.txt, print the size of that file in bytes.
 */
var fs = require( 'fs' );

fs.stat( './1_ExoBuffer.js', function( err, stats ) {
  if ( err ) { throw err; }
  console.log( stats.size );
});
