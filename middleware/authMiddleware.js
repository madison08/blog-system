const User = require('../models/UserSchema')

module.exports = (req, res, next) =>{

    User.findById(req.session.userId).then((user) =>{


        if(!user){
            
            return res.redirect('/')
        }

        next()

    }).catch((error) =>{
        return res.redirect('/')
    })

}