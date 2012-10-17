var projects        = require( "../model/support/Mock" ).projects,
    http            = require( "http" ),
    StoryCollection = require( "../collection/StoryCollection" ),
    Story           = require( "../model/Story" ),
    SocketManager   = require( "../connect/SocketManager" ).getInstance();

var server = http.createServer();
SocketManager.listen( server );

describe( "mock data", function() {
    
    it( "should", function() {
        
        expect( projects.length ).toBe( 2 );
        
        var project = projects.at( 0 );
        expect( project.get( "stories" ) instanceof StoryCollection );
        expect( project.get( "stories" ).length ).toBe( 3 );
        
        var story = project.get( "stories" ).at( 0 );
        expect( story instanceof Story );
        expect( story.get( "name" ) ).toBe( "s1" );
        expect( story.url() ).toBe( "/api/projects/1/stories/1" );
        
        expect( project.getSocket() ).toBe( story.getSocket() );
        
    });
    
});
