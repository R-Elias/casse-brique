const mongoose = require('mongoose')
const Schema = mongoose.Schema

/** Mongoose and mongodb */
const configSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    layout: {
        type: String, 
        required: true
    }
}, {timestamps: true})

const Config = mongoose.model('Config', configSchema)


module.exports = Config