const express = require('express')
const path = require('path')
const ejs = require('ejs')
const mongoose = require('mongoose')
const Blog = require('./models/BlogSchema')
const fileUpload = require('express-fileupload')

const app = express()

// ejs templating
app.set('view engine','ejs' )

// file upload
app.use(fileUpload())

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', async (req, res) =>{


    try{
        const blogPosts = await Blog.find({})

        // console.log(blogPosts)

        res.render('index', {
            blogPosts
        })

    }catch(err){
        console.log(err)
    }



    

})

app.get('/contact', (req, res) =>{

    res.render('contact')

})

app.get('/about', (req, res) =>{

    res.render('about')

})


app.get('/post/:id', async (req, res) =>{

    const id = req.params.id

    const blog = await Blog.findById(id)

    res.render('post', {
        blog
    })

})


app.get('/posts/new', (req, res) =>{

    res.render('create')

})

app.post('/posts/store',   (req, res) =>{

    let image = req.files.image

    console.log(image)

    image.mv(path.resolve(__dirname,'public/img',image.name), async (err) =>{
        await Blog.create({
            title: req.body.title,
            body: req.body.body,
            image: '/img/'+image.name
        })



        res.redirect('/')
    })



        // await Blog.create(req.body)

        // res.redirect('/')



    // await Blog
    // .create({
    //     title: req.body.title,
    //     body: req.body.body
    //     })

    // res.redirect('/')


})


const PORT = 4000

app.listen(PORT, () =>{

    console.log(`[server] running http://localhost:${PORT}`)

})


mongoose.connect('mongodb://localhost:27017/my_database', {useNewUrlParser: true}, () =>{

    console.log(`[database] running`)

})

// require('./test.js')


