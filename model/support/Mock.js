var ProjectCollection = require( "../../collection/ProjectCollection" ),
    Project = require( "../../model/Project" ),
    Story = require( "../../model/Story" );

module.exports = {
    projects: new ProjectCollection([
        {
            id: 1,
            name: "p1",
            title: "Project One",
            stories: [
                {
                    id: 1,
                    name: "s1",
                    title: "Story 1"
                },
                {
                    id: 2,
                    name: "s2",
                    title: "Story 2"
                },
                {
                    id: 3,
                    name: "s3",
                    title: "Story 3"
                }
            ]
        },
        {
            id: 2,
            name: "p2",
            title: "Project Two",
            stories: [
                {
                    id: 4,
                    name: "s4",
                    title: "Story 4"
                },
                {
                    id: 5,
                    name: "s5",
                    title: "Story 5"
                }
            ]
        }
    ])
}
