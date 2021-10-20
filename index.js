const express = require('express')
const path = require('path')
const ejs = require('ejs')
const mongoose = require('mongoose')
const Blog = require('./models/BlogSchema')
const fileUpload = require('express-fileupload')

// controllers
const newPostController = require('./controllers/newPostController')
const homeController = require('./controllers/homeController')
const getSinglePostController = require('./controllers/getSinglePostController')
const storePostController = require('./controllers/storePostController')

const app = express()

// ejs templating
app.set('view engine','ejs' )

// file upload
app.use(fileUpload())

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// const customValidation = (req, res, next) =>{
//     console.log('custom middleware')

//     next()
// }



// app.use('/posts/store',(req, res, next) => {

//     if(req.files == null || req.body.title == null || req.body.body == null){
//         return res.redirect('/posts/new')
//     }

//     console.log('hey hey')

//     next()
// })


app.get('/', homeController)

// app.get('/contact', (req, res) =>{

//     res.render('contact')

// })

// app.get('/about', (req, res) =>{

//     res.render('about')

// })


app.get('/post/:id', getSinglePostController)


// app.get('/posts/new', (req, res) =>{

//     res.render('create')

// })

app.get('/posts/new', newPostController)

app.post('/posts/store', storePostController )


const PORT = 4000

app.listen(PORT, () =>{

    console.log(`[server] running http://localhost:${PORT}`)

})


mongoose.connect('mongodb://localhost:27017/my_database', {useNewUrlParser: true}, () =>{

    console.log(`[database] running`)

})

// require('./test.js')


