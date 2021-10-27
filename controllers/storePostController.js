const Blog = require('../models/BlogSchema')
const path = require('path')

module.exports = (req, res) =>{

    let image = req.files.image

    image.mv(path.resolve(__dirname,'../public/img',image.name), async (err) =>{
        await Blog.create({
            title: req.body.title,
            body: req.body.body,
            userId: req.session.userId,
            image: '/img/'+image.name
        })

        res.redirect('/')
    })


}