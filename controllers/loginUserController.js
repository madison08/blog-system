const User = require('../models/UserSchema')
const bcrypt = require('bcrypt')


module.exports = (req, res) =>{

    const { username, password } = req.body

    User.findOne({username: username}).then((user => {

        if(user){

            const verifUser = bcrypt.compareSync(password,user.password)

            req.session.userId = user._id


            if(verifUser){
                return res.redirect('/')

            }else{

                return res.redirect('/auth/login')

            }

        }

        res.redirect('/auth/login')



    }))



}