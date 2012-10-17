var Db      = require( "backbone-mongodb" ).Db,
    async   = require( "async" ),
    model   = require( "../model/Model" );
    
var wrap = function( callback ) {
    return {
        success: function( collection ) {
            callback( null, collection );
        },
        error: function( err ) {
            callback( err );
        }
    }
}
    
var DbManager = function() {
    var db = new Db({
        name: "test",
        host: "127.0.0.1",
        port: 27017,
        autoconnect: true
    });
    
    db.on( "connected", function( err ) {
        if ( err ) {
            console.err( err )
        } else {
            console.log( "Connected" );
        }
    });
    
    this.db = db;
}

DbManager.prototype = {
    
    mport: function( done ) {
        async.series([
            function( callback ) {
                var projects = new ProjectCollection();
                projects.fetch( wrap( callback ) );
            }
        ], done );
    },
    
    xport: function() {
        async.forEach( model.projects.models, function( project ) {
            project.save({
                
            })
        });
    }
    
}

DbManager.getInstance = function() {
    if ( this._instance === undefined ) {
        this._instance = new DbManager();
    }
    return this._instance;
}

module.exports = DbManager;