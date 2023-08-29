// connect mongoDB
// run server



const dotenv = require('dotenv')
dotenv.config()
const app = require('./app')
const mongoose = require('mongoose')
const { connect } = require('http2')  

mongoose.connect(process.env.MONGODB_SERVER,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    // useCreateIndex : true,
})
.then(() =>console.log("successfully connected to mongoDB!"))
.catch((err) => console.log("connection failed"));  


const port =process.env.PORT||3001
app.listen(port,()=>{
    console.log(`listening port on ${port} `)
})

