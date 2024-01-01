const getAllUsers = async (req, res) => {
    res.send("get all users route");
}


const getSingleUser = async (req, res) => {
    res.send("get single route");
}


const showCurrentUser = async (req, res) => {
    res.send("show current user");
}


const updateUser = async (req, res) => {
    res.send("updateUser");
}


const updateUserPassword = async (req, res) => {
    res.send(updateUserPassword);
}

module.exports = {
    getAllUsers,
    getSingleUser,
    showCurrentUser,
    updateUser,
    updateUserPassword

}