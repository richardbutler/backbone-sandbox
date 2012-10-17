var Backbone = require( "backbone" );

var ProjectCollection = Backbone.Collection.extend({
    
    urlRoot: function() {
        return this.collectionName;
    },
    
    collectionName: "projects",
    
    model: require( "../model/Project" )
    
});

module.exports = ProjectCollection;