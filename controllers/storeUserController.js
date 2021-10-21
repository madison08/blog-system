const User = require('../models/UserSchema')
const path = require('path')
const bcrypt = require('bcrypt')

module.exports = (req, res) => {

    // const passwordHash = bcrypt.hashSync

    User.create({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10)
    }).then((resp) => {

        console.log(resp)

        res.redirect('/')

    })

    // console.log(req.body)

}