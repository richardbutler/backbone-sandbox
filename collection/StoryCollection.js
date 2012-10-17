var Backbone = require( "backbone" );

var StoryCollection = Backbone.Collection.extend({
    
    initialize: function( models, options ) {
        if ( options ) {
            this.project = options.project;
        }
    },
    
    urlRoot: function() {
        return [ this.project.url(), this.collectionName ].join( "/" );
    },
    
    collectionName: "stories",
    
    model: require( "../model/Story" ),
    
    getSocket: function() {
        return this.project.getSocket();
    }
    
});

module.exports = StoryCollection;