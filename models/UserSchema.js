const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema

const UserSchema = new Schema({

    username: {
        type: String,
        required: [true, 'Please provide username'],
        trim: true,
        unique: true,
        index: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        trim: true
    }

})

UserSchema.plugin(uniqueValidator)

const User = mongoose.model('User', UserSchema)

module.exports = User