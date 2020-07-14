const {GraphQLServer} = require('graphql-yoga')

const Mutation = require('./resolvers/Mutation')
const Query = require('./resolvers/Query')

const  db = require('./db')

// Create the GraphL Yoga Server - this is what we're going to be interfacing with our GraphQL
function createServer(){
    return new GraphQLServer({
        typeDefs: 'src/schema.graphql',
        resolvers: {
            Mutation: Mutation,
            Query: Query
        },
        resolverValidationOptions: {
            requireResolversForResolveType: false
        },
        context: req => ({...req, db})
    })
}

module.exports = createServer;
