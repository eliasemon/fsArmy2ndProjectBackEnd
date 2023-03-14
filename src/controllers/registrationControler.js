const findUserFromdb = require("../services/findUserFromdb")
const saveUser = require("../services/saveUser")
const registerUser = async (req, res) => {
    try {
        console.log("I am here")
        //Checking is the new user registered before?
        const isRegistered = await findUserFromdb(req.user?.uid)
        if (isRegistered) {
            res.status(400).json({ message: "User Already Registerd" })
            return
        }

        const data = {...req.body.data}
        data.id = req.user.uid
        const resData = await saveUser(data)
        res.status(201).json({ message: "RegisTration succesfull", data: resData })
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
    res.end()
}
module.exports = registerUser