const {Schema,model}= require('mongoose')


const OrderSchema = Schema({
    userId :Schema.Types.ObjectId,
    ingredients:[{type:{type:String},amount:Number}],
    customer:{
       DeliveryAddress:String,
       Phone : String,
       paymentType:String
       },
    price:Number,
    orderTime:{type:Date,default:Date.now}   
})

module.exports.Order = model('model',OrderSchema)