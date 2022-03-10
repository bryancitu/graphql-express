const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./graphql/schema')
require('dotenv').config();

//DB config
const { connectDB } = require('./db');
connectDB();

// App de Express
const app = express()

app.get('/', (req, res) => {
    res.send('welcome to my graphql api')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen( process.env.PORT, ( err ) => {

    if ( err ) throw new Error(err);
    console.log('Servidor corriendo en puerto', process.env.PORT );

});