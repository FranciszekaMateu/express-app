const { Schema, model } = require('mongoose')
const messageCollection = 'messages'

const messageSchema = Schema({
    user: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true,
        unique: true
    }
})
module.exports = model(messageCollection, messageSchema)