const express = require('express')
const cors = require('cors')       // cross origin resource sharing
const UserRouter = require('./routers/userRouter')
const OrderRouter = require('./routers/orderRouter')
const app = express()

app.use(cors())                   //MIDDLEWARE function.

app.use(express.json())         // built in middleware function. POST METHOD: converting file into json

app.use('/user', UserRouter)
app.use('/order',OrderRouter)

module.exports = app;