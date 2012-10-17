var Backbone        = require( "Backbone" ),
    StoryCollection = require( "../collection/StoryCollection" ),
    SocketManager   = require( "../connect/SocketManager" ).getInstance();

var Project = Backbone.Model.extend({
    
    initialize: function( attributes, options ) {
        var stories = attributes.stories;
        
        if ( !( stories instanceof Backbone.Collection ) ) {
            stories = new StoryCollection( stories );
        }
        
        stories.project = this;
        
        this.set( "stories", stories, { silent: true } );
    },
    
    url: function() {
        return [ this.collection.urlRoot, this.get( this.idAttribute ) ].join( "/" );
    },
    
    getSocket: function() {
        return SocketManager.forProject( this );
    }
    
});

module.exports = Project;