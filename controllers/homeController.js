
const Blog = require('../models/BlogSchema')


module.exports = (req, res) =>{

    console.log(req.session)
    
    Blog.find({}).then(resp => {
        
        const blogPosts = resp

        res.render('index', {
            blogPosts
        })
    })


}