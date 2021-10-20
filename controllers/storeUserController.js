const User = require('../models/UserSchema')
const path = require('path')

module.exports = (req, res) => {

    User.create({
        username: req.body.username,
        password: req.body.password
    }).then((resp) => {

        console.log(resp)

        res.redirect('/')

    })

    // console.log(req.body)

}