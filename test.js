const mongoose = require('mongoose')

const Blog = require('./models/BlogSchema.js')


// Supprimer un article

// const id = "6167f7aaf366e2f7ee447748"
// Blog.findByIdAndDelete(id).then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })

// mettre a jour un article 

// const id = "61670f405fdb8e507eed4928"

// Blog.findByIdAndUpdate(id, {
//     title: 'updated our title'
// }).then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })


// recuperer un article par son id

// const id = "61670f405fdb8e507eed4928"
// Blog.findById(id).then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })


// recuperer les article qui contienne 'The'
// Blog.find({title: /The/}).then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })


// Blog.find({title: 'The hyper big title'}).then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })


// Blog.create({
//     title: 'Les developpeur de la cote d\'ivoire',
//     body: 'If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money topics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery opens up. You know those bullet-point lists. You start spotting them everything at this time of year.They go like this:'
// }, (err, blog) => {
//     console.log(err, blog)
// })


mongoose.connect('mongodb://localhost:27017/my_database', {useNewUrlParser: true}, () =>{

    console.log(`[database] running`)

})