const { GraphQLString } = require("graphql");
const { User } = require('../models')

const register = {
    type: GraphQLString,
    description: "Register a new users",
    args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        displayName: { type: GraphQLString }
    },
    async resolve(_, args) {
        console.log(args);
        const {username, email, password, displayName} = args

        // const newUser = await User.create({username, email, password, displayName}) //un aforma de crear un usuario
        // console.log(newUser);

        // otra forma de crear un usuario
        const newUser = new User({username, email, password, displayName})
        const user = await newUser.save()
        console.log(user);

        return 'new user created'
    }
}

module.exports = {
    register,
}