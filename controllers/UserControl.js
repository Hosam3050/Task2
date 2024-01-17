

const User = require("../modules/User");



/************************** Register & Login ************************ */

const Register = async (_username, _password, _firstName) => {
    try {
        let data = await User.create({ username: _username, password: _password, firstName: _firstName });
        if (data) {
            console.log("Regester is Done ")
        }
        else {
            console.log("error");
        }
    }
    catch (e) {
        console.log(e);
    }

}



const Login = async (_username, _password, _firstName) => {
    try {
        let data = await User.find({ username: _username, password: _password, firstName: _firstName });
        if (data) {
            console.log("Welcome in website");
        }
    }
    catch (e) {
        console.log(e);
    }

}

/********************************************************************************************* */
// -----------------------------GET USERS by first register------------------------------------------------

const getUsers = async () => {
    try {
        let data = await User.findOne({}, { projection: { _username: 1 } });
        if (data) {
            console.log('User', data)
        }
        else {
            console.log("error");
        }
    }
    catch (e) {
        console.log(e);
    }

}

/********************************************************************************************* */
// -------------------------------Delet User-----------------------------------------------------

const deletUser = async (id) => {
    try {
        let data = await User.deleteOne({ _id: id });
        if (data) {
            console.log('deleting done ', data)
        }
        else {
            console.log("error");
        }
    }
    catch (e) {
        console.log(e);
    }

}



/********************************************************************************************* */
// ------------------------------------Edit User-------------------------------------------------

const editUser = async (_username, newData) => {
    try {
        const user = await User.findOneAndUpdate(
            { username: _username },
            { $set: newData },
            { new: true } 
        );
        if (user) {
            console.log('User updated successfully:', user);
        } else {
            console.log('User not found');
        }
    } catch (e) {
        console.error('Error updating user:', e);
    }
};



/*************----Exports----************ */


module.exports = { Register, Login, getUsers, deletUser, editUser };

