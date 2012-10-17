var Backbone = require( "Backbone" );

var Story = Backbone.Model.extend({
    
    initialize: function( attributes, options ) {
        
    },
    
    url: function() {
        return [ this.collection.urlRoot(), this.get( this.idAttribute ) ].join( "/" );
    },
    
    getSocket: function() {
        return this.collection.getSocket();
    }
    
});

module.exports = Story;