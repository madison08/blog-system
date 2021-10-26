const User = require('../models/UserSchema')
const path = require('path')
const bcrypt = require('bcrypt')

module.exports = (req, res) => {

    // const passwordHash = bcrypt.hashSync


    User.create({
        username: req.body.username,
        password: req.body.password ? bcrypt.hashSync(req.body.password, 10) : req.body.password
    }).then((resp) => {

        console.log(resp)

        res.redirect('/')

    }).catch((err) => {

        const validationsErrors = Object.keys(err.errors).map(key => err.errors[key].message)

        // console.log(validationsError)

        // req.session.validationsError = validationsError
        req.flash('validationErrors', validationsErrors)

        req.flash('data', req.body)

        // console.log(resp)

        // console.log(req.session)

        return res.redirect('/auth/register')
    })

    // console.log(req.body)

}