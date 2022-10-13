const mongoose = require('mongoose')
const Schema = mongoose.Schema

/** Mongoose and mongodb */
const scoreSchema = new Schema({
    score: {
        type: String, 
        required: true
    },
    username:{
        type: String,
        required: true
    }
}, {timestamps: true})

const Score = mongoose.model('Score', scoreSchema)



module.exports = Score