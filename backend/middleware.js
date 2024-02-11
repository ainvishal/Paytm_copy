const jwt = require('jsonwebtoken');
const JWT_SECRET  = require('./config')

 function authheader(req, res, next) {
    const auth = req.header.authorization.split(' ')
    const token = auth[1]

    try {
        const verifyuser =  jwt.verify(token, JWT_SECRET)
        req.body.userid  = verifyuser.userid;
        next()
    }catch(err) {
        res.staus(401).json({
            err: 'there is an error in authorization'
        })
    }


}

module.exports = authheader