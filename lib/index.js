const { nodeEnv } = require('./util');
console.log(`Running in ${nodeEnv} mode...`);

const ncSchema = require('../schema');
const graphqlHttp = require('express-graphql');
const app = require('express')();

const {
    buildSchema,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql');

app.use('/graphql', graphqlHttp({
    schema: ncSchema,
    graphiql: true,
}));

const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
