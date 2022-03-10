const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect( process.env.DB_CNN)
        console.log('Mongo Connect');
    } catch (error) {
        console.log(error);
        throw new Error("Error de la base de datos - Hable con el admin")
    }
}

module.exports = { connectDB }