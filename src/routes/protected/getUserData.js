const router =  require('express').Router();
const getUserData = require("../../controllers//getUserDataController.js")
router.get('/getUserData', getUserData );

module.exports = router;