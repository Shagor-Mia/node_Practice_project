
const jwt = require('jsonwebtoken')

module.exports = function (req,res,next){
    let token = req.header('Authorization')
    if(!token) return res.status(400).send('access denied!')

    try {
        const decoded = jwt.verify(token.split(" ")[1].trim(), process.env.JWT_TOKEN)
        req.user = decoded;
        next();    
    } 
    
    catch (error) {
        return res.status(400).send('invalid token!')
    }
}