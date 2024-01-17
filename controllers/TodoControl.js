const Todo = require("../modules/Todo");


/**************************************************************************************** */
// -----------------------------------Create Todo----------------------------------------------

const createTodo = async (_tittle,_tags, _userId) => {
    try {
        let data = await Todo.create({tittle:_tittle,tags:_tags, userId: _userId});
        if (data) {
            console.log('Todo', data)
        }
        else {
            console.log("error");
        }
    }
    catch (e) {
        console.log(e);
    }

}



/**************************************************************************************** */
// -----------------------------------Delet Todo----------------------------------------------

const deletTodo = async (id) => {
    try {
        let data = await Todo.deleteOne({_id:id});
        if (data) {
            console.log('Deleted Done', data)
        }
        else {
            console.log("error");
        }
    }
    catch (e) {
        console.log(e);
    }

}




/*************----Exports----************ */

module.exports = {createTodo,deletTodo};

