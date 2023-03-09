const { Schema, model } = require('mongoose')
const productCollection = 'producto'
const mongoosePaginate = require("mongoose-paginate-v2")
const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    category: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true
    },
    stock: {
        type: Number
    },
    price: {
        type: Number
    },
    description: {
        type: String
    }
})
ProductSchema.plugin(mongoosePaginate)
module.exports = ProductSchema

