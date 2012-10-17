var io = require( "socket.io" );

var SocketManager = function() {
    
}

SocketManager.prototype = {
    listen: function( server ) {
        return this.socket = io.listen( server );
    },
    forProject: function( project ) {
        return this.socket.of( project.url() )
    }
}

SocketManager.getInstance = function() {
    if ( SocketManager._instance === undefined ) {
        SocketManager._instance = new SocketManager();
    }
    
    return SocketManager._instance;
}

module.exports = SocketManager;