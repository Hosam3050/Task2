const userController = require('../controllers/UserControl');
const User = require('../modules/User');
const express = require('express');
const route = express.Router();
const bcrypt = require('bcrypt');


route.get('/', (req, res) => {
    res.send('Welcome....')
})

route.post('/reg', async (req, res) => {
    let { username, password, firstName } = req.body;
    bcrypt.hash(password, 10, async function (err, hash) {
        let data = await userController.Register(username, hash, firstName)
        console.log(data);
        res.send('Done...');
    });

});


route.post('/log', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username }); 
        if (!user) {
            return res.status(401).send('invalid');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            res.send('Login Done...');
        } else {
            res.status(401).send('Invalid');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Login failed');
    }
});


/******************************************************************* */

route.get("/getUser", async (req, res) => {

    try {
        let data = await userController.getUsers();
        if (data != "error") {
            res.json({
                users: data,
                msg: "ok",
                status: 200
            });
            console.log(data)
        }
        else {
            res.status(403).send("not found")
        }
    }
    catch (e) {
        res.status(500).send('server error');
        console.log(e)
    }

})

/********************** delete**************************** */

route.get("/delet-users", async (req, res) => {

    try {
        let data = await userController.deletUser();
        if (data != "error") {
            res.send('delteng....')
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

/********************Update************************* */

route.patch("/update-user", async (req, res) => {

    try {
        let data = await userController.editUser();
        if (data != "error") {
            res.send('updating Done...')
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
