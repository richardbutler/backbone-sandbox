var Backbone = require( "backbone" );

var Model = new Backbone.Model({
    
    projects: new ProjectCollection()
    
});

module.exports = Model;