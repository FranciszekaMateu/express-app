const { Schema, model } = require('mongoose')
const cartCollection = 'carts'

const cartSchema = Schema({
    products: {
        type: [{
            product: {
                type: Schema.Types.ObjectId,
                ref: 'products'
            },
             quantity: {
                 type: Number,
             }
            
        }]
    }
})

cartSchema.pre('find', function(){
    this.populate('products.product')
})

module.exports = model(cartCollection,cartSchema)