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


const styleSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    layout: {
        type: String,
        required: true
    }
})

const Style = mongoose.model('Style', styleSchema)


module.exports = {Config, Style}