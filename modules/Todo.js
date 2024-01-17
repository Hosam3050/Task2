

const mongoose = require('mongoose');
const todoSchema = mongoose.Schema({

    tittle :{
        type:String,
        required: true,
        minLength:5,
        maxlength:20
    },
    status:{
        type:String,
        default:"to-do"

    },
    tags:{
        type:[String],
        maxlength: 10
    },
    createdAt:{
        type:Date,
        default:Date.now
    
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
}

})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;