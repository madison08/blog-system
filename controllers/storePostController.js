module.exports = (req, res) =>{

    let image = req.files.image

    image.mv(path.resolve(__dirname,'public/img',image.name), async (err) =>{
        await Blog.create({
            title: req.body.title,
            body: req.body.body,
            image: '/img/'+image.name
        })

        res.redirect('/')
    })


}