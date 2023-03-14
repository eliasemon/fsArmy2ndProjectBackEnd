const updatedUserInfo = require("../services/updateUserInfo")
const findUserFromdb = require("../services/findUserFromdb")
const userInfoUpdate = async (req, res) => {
    try {
        const isRegistered = await findUserFromdb(req.user?.uid)
        if (!isRegistered) {
            res.status(400).json({ message: "User Not registered" })
            return
        }
        const resData = await updatedUserInfo( req.user.uid , req.body.data)
        res.status(201).json({ message: "Update info successfully", data: resData })
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
}
module.exports = userInfoUpdate