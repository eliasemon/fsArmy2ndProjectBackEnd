const router = require('express').Router()
const registerUser = require("../../controllers/registrationControler.js")
router.route('/reg')
  .post(registerUser)

module.exports = router;