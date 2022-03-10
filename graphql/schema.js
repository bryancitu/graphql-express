const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const { register } = require("./mutation");
const { hello } = require('./queries')

const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: 'The root query type',
    fields: {
        hello
    }
})

const MutationType = new GraphQLObjectType({
    name: "MutationType",
    description: "The root query type",
    fields: {
        register
    }
})

const schema = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
})

module.exports = schema