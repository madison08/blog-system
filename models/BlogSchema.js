const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BlogSchema = new Schema({
    title:{
        type: String
    },

    body:{
        type: String
    },

    username:{
        type: String
    },

    datePosted:{
        type: Date,
        default: new Date
    },
    image: {
        type: String
    }
})

const Blog = mongoose.model('Blog', BlogSchema)

module.exports = Blog