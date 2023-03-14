const router =  require('express').Router();
const userInfoUpdate = require("../../controllers/userInfoUpdateControler.js")
router.put('/userinfoUpdate', userInfoUpdate );

module.exports = router;