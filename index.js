const express = require('express')
const path = require('path')
const ejs = require('ejs')

const app = express()


app.set('view engine','ejs' )


app.use(express.static('public'))


app.get('/', (req, res) =>{

    res.sendFile(path.resolve('views','index.html'))

})

app.get('/contact', (req, res) =>{

    res.sendFile(path.resolve('public','contact.html'))

})

app.get('/about', (req, res) =>{

    res.sendFile(path.resolve('public','about.html'))

})


app.get('/post', (req, res) =>{

    res.sendFile(path.resolve('public','post.html'))

})


const PORT = 4000

app.listen(PORT, () =>{

    console.log(`[server] running http://localhost:${PORT}`)

})