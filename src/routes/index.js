const router = require('express').Router()


router.use(require("./catagories"))
router.use(require("./authGoggleCallback"))






// protectedRoute Start
const protectedRoute = require('express').Router()
protectedRoute.use(require('../middlewares/authorizeUsers.js'))
protectedRoute.use(require("./protected/registration.js"))
protectedRoute.use(require("./protected/userInfoUpdate"))
protectedRoute.use(require("./protected/getUserData"))
protectedRoute.use(require("./protected/authGoogle"))
protectedRoute.use(require("./protected/groupdiscussion"))
// protectedRoute End 


router.use(protectedRoute)
module.exports = router

