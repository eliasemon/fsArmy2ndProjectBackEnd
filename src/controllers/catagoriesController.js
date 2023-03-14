const findCatagories = require("../services/findCatagories")

const getCatagories = async (req, res) => {
    try {
        //Checking is the new user registered before?
        const resData = await findCatagories()
        res.status(200).json({ data : resData})
        return;
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
}
module.exports = getCatagories