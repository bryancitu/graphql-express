const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const { register, login } = require("./mutation");
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
        register,
        login
    }
})

const schema = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
})

module.exports = schema