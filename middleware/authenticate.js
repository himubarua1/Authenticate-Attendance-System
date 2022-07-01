const jwt = require('jsonwebtoken');
const User = require('../models/user');

async function authenticate(req, res, next){
    try{
        let token = req.headers.authorization;
        if(!token){
            return res.status(401).json({message: 'Unauthorized'});
        }
        token = token.split('')[1];
        const decoded = jwt.verify(token, 'secret-key');
        const user = await User.findById(decoded._id);
        if(!user){
            return res.status(401).json({message: 'unauthorized'});
        }
        req.user = user;
        next();
    }catch(e){
        return res.status(400).json({message: 'Invalid token'});
    }
}
module.exports = authenticate;