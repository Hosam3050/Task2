


const todoController = require('../controllers/TodoControl');
const Todo = require('../modules/Todo');
const express = require('express');
const route = express.Router();


/*************************Creat*********************************************** */


route.post("/creat-Todo", async (req, res) => {

    try {
        let {tittle,tags,userId } = req.body;
        let data = await todoController.createTodo(tittle,tags,userId);
        if (data != "error") {
            res.send('creating Done...')
            console.log(data)
        }
        else {
            res.status
            (403).send("not found")
        }
    }
    catch (e) {
        res.status(500).send('server error');
        console.log(e)
    }

})


/********************************************************* */


route.post("/delet-todo", async (req, res) => {

    try {
        let data = await todoController.deletTodo();
        if (data != "error") {
            res.send('delteng Todo...')
            console.log(data)
        }
        else {
            res.status
            (403).send("not found")
        }
    }
    catch (e) {
        res.status(500).send('server error');
        console.log(e)
    }

})


module.exports = route;
