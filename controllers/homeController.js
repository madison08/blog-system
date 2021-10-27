
const Blog = require('../models/BlogSchema')


module.exports = (req, res) =>{

    console.log(req.session)
    
    Blog.find({}).populate('userId').then(resp => {
        
        const blogPosts = resp

        // console.log(blogPosts)

        res.render('index', {
            blogPosts
        })
    })


}