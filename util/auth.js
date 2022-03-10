const jwt = require('jsonwebtoken')

const createJWTToken = user => {
    return jwt.sign({user}, process.env.JWT_KEY,{
        expiresIn: '24h'
    })
}

module.exports = {
    createJWTToken
}