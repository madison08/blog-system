
const Blog = require('../models/BlogSchema')


module.exports = (req, res) =>{


    
    Blog.find({}).then(resp => {
        
        const blogPosts = resp

        res.render('index', {
            blogPosts
        })
    })


}