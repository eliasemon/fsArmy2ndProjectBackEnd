const CatModel = require("../db/models/catagoryModel")
const router =  require('express').Router();
const catagories = require("../controllers/catagoriesController")
router.route("/catagories")
    .get(catagories)

    // extra route it will be deleted soon 
    .post(async (req , res) => {
        console.log("I happening")
        try {
            const sukey = "sdf-asdfsf-asfd54-sadfs554rtewr"
            const {superAdminKey , data } = req.body
            if(!superAdminKey || sukey === superAdminKey) throw new Error("You are not authenticated")
            const resData =  await CatModel.insertMany(data)
            res.status(200).json({data : resData}) 
        } catch (error) {
            res.status(400).json({message : error.message}) 
        }
        
    })


module.exports = router;