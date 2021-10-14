const express = require('express')
const path = require('path')
const ejs = require('ejs')
const mongoose = require('mongoose')

const app = express()

// ejs templating
app.set('view engine','ejs' )


app.use(express.static('public'))


app.get('/', (req, res) =>{

    res.render('index')

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


const PORT = 4000

app.listen(PORT, () =>{

    console.log(`[server] running http://localhost:${PORT}`)

})


// mongoose.connect('mongodb://localhost:27017/my_database', {useNewUrlParser: true}, () =>{

//     console.log(`[database] running`)

// })

require('./test.js')


