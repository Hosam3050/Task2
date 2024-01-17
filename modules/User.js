

const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: {
        type: String,
    },
    password :{
        type:String,
    },
    firstName:{
        type:String,
    },
    age:{
        type:Number,
        min: 13
    }})

const User = mongoose.model('User', userSchema);

module.exports = User;

// -------------------------------------------


