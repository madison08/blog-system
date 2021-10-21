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
const registerUserController = require('./controllers/registerUserController')
const storeUserController = require('./controllers/storeUserController')
const getLoginController = require('./controllers/getLoginController')
const loginUserController = require('./controllers/loginUserController')

//middlewares
const validationMiddleware = require('./middleware/validationMiddleware')

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



// app.use('/posts/store', validationMiddleware)


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

app.get('/auth/register', registerUserController)

app.post('/auth/register', storeUserController)

app.get('/auth/login', getLoginController)


app.post('/auth/login', loginUserController)


const PORT = 4000

app.listen(PORT, () =>{

    console.log(`[server] running http://localhost:${PORT}`)

})


mongoose.connect('mongodb://localhost:27017/my_database', {useNewUrlParser: true}, () =>{

    console.log(`[database] running`)

})

// require('./test.js')


