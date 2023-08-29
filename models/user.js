const jwt = require('jsonwebtoken')
const joi = require('joi')
const {Schema,model} = require('mongoose')

const UserSchema = Schema({
    email:{
        type:String,
        require:true,
        unique:true,
        minlength:5,
        maxlength:255
    },

    password:{
        type:String,
        require:true,
        minlength:5,
        maxlength:1024
    }
})

UserSchema.methods.generateJWT=function(){
    const token = jwt.sign({_id:this._id,email:this.email},
        process.env.JWT_TOKEN,
        {expiresIn:"5h"})
    return token;    
}

const validateUser = user =>{    
   const schema = joi.object({
    email: joi.string().min(5).max(255).required().email(),
    password: joi.string().min(5).max(255).required()
})
  return schema.validate(user);
}

module.exports.User = model('User',UserSchema)
module.exports.validate = validateUser;