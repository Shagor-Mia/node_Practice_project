const express = require('express')
const {Order} = require('../models/order')
const authorize = require('../middlewares/authorize')

const router = express.Router()

const newOrder = async(req,res)=>{
    const order = new Order(req.body);
    try{
        await order.save()
        return res.status(200).send('order placed successfully')
    }
    catch(err){
          return res.status(400).send('sorry.something went wrong!')
    }
}

const OrderList = async(req,res)=>{
    const orders =await Order.find({userId:req.user._id}).sort({orderTime:-1})
    res.send(orders);
}


router.route('/')
      .get(authorize,OrderList)
      .post(authorize,newOrder)

module.exports=router