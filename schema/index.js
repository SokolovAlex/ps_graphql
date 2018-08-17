const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql');

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        hello: {
            type: GraphQLString,
            description: 'some description',
            resolve: () => 'world'
        }
    }
});

const ncSchema = new GraphQLSchema({
    query: RootQueryType
});

module.exports = ncSchema;