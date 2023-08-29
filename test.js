const joi = require('joi')


const schema = joi.object({
    email: joi.string().min(5).max(255).required().email(),
    password: joi.string().min(5).max(1024).required()
})

const user ={
    email:'sa@gmail.com',
    password: '12345'
}

const {error} = schema.validate(user)

console.log(error.details[0].message)