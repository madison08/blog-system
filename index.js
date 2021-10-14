const express = require('express')
const path = require('path')
const ejs = require('ejs')
const mongoose = require('mongoose')
const Blog = require('./models/BlogSchema')

const app = express()

// ejs templating
app.set('view engine','ejs' )


app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', async (req, res) =>{


    try{
        const blogPosts = await Blog.find({})

        console.log(blogPosts)

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


app.get('/post', (req, res) =>{

    res.render('post')

})

app.get('/posts/new', (req, res) =>{

    res.render('create')

})

app.post('/posts/store', async (req, res) =>{



    await Blog
    .create({
        title: req.body.title,
        body: req.body.body
        })

    res.redirect('/')


})


const PORT = 4000

app.listen(PORT, () =>{

    console.log(`[server] running http://localhost:${PORT}`)

})


mongoose.connect('mongodb://localhost:27017/my_database', {useNewUrlParser: true}, () =>{

    console.log(`[database] running`)

})

// require('./test.js')


