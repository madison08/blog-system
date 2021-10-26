// const flash = require('connect-flash')

module.exports = (req, res) =>{

    var username = "";
    var password = "";

    // console.log(req.flash('data'))

    const data = req.flash('data')[0];

    // console.log('data-------')
    // console.log(data)

    if(typeof data != "undefined"){
        username = data.username
        password = data.password
    }

    // console.log(`username: ${username}, password: ${password}`)

    

    // console.log(data)


    res.render('register', {
        errors: req.flash('validationErrors'),
        username: username,
        password: password
    })
}