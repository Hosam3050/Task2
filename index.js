const mongoose = require('mongoose');
const express = require('express')
const app = express()
const port = 8080
const userRoute = require('./routes/userRoutes');
const todoRoute = require('./routes/todoRoutes');


mongoose.connect('mongodb://127.0.0.1:27017/MyDb').then(() => {
    console.log("connect to db");
}).catch(err => {
    console.log(err);
})

app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoute);
app.use('/todos', todoRoute);
app.listen(port, () => console.log(`My port listening on port ${port}!`))



/************************************************************ */
