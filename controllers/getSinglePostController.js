
const Blog = require('../models/BlogSchema')


module.exports = async (req, res) =>{

    const id = req.params.id

    const blog = await Blog.findById(id).populate('userId')

    console.log(blog)

    res.render('post', {
        blog
    })

}