const findUserFromdb = require("../services/findUserFromdb")
const userInfoUpdate = async (req, res) => {
    try {
        const isRegistered = await findUserFromdb(req.user?.uid)
        if (!isRegistered) {
            res.status(400).json({ message: "User Not registered" })
            return
        }
        res.status(200).json({ data: isRegistered })
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
}
module.exports = userInfoUpdate