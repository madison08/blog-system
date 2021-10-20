
const Blog = require('../models/BlogSchema')


module.exports = async (req, res) =>{

    const id = req.params.id

    const blog = await Blog.findById(id)

    res.render('post', {
        blog
    })

}