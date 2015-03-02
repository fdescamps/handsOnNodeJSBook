/*
 * .
 * Make a chat server that requires no authentification, just a tcp client connection
 * Each time the client sends some text, the server broadcasts it to the other clients.
 */
var sockets = [];
require( 'net' ).createServer( function( socket ){

  sockets.push( socket );

  socket.on( 'data', function( data ){
    // got data
    console.log( 'data received : ' + data );
    sockets.forEach( function( socket ) {
      socket.write( data );
    });
  });

  socket.on( 'end', function( data ){
    // connection closed
    console.log( 'connection closed!' );
    var pos = sockets.indexOf( socket );
    if ( pos > 0 ) {
      sockets.splice( pos, 1 );
    }
  });

  socket.on( 'close', function( data ){
    // server closed
    console.log( 'server closed!' );
  });

  socket.on( 'error', function( error ){
    // server closed
    console.log( 'error thrown : ' + error );
  });

  socket.write( 'Some string' );

}).listen( 4001 );
