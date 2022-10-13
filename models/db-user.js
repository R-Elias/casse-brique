const mongoose = require('mongoose')
const Schema = mongoose.Schema

/** Mongoose and mongodb */
const userSchema = new Schema({
    username: {
        type: String, 
        required: true
    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema)



module.exports = User