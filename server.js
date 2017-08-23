/**
 * Module dependencies.
 */
var path = require('path');
var application = require(__dirname + '/config/express.js');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = process.env.PORT || 3000;
application.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(application);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);



/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if(error.syscall !== 'listen') {
        throw error;
    }

    var bind = 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch(error.code) {
    case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
    case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
    default:
        throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var bind = 'port ' + server.address().port;
    console.log('Listening on ' + bind);
}
