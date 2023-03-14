const FirebaseAdmin = require("firebase-admin");
const FirebaseServiceAccount = require("../../../FirebaseServiceAccountKey.json")

FirebaseAdmin.initializeApp({
  credential: FirebaseAdmin.credential.cert(FirebaseServiceAccount)
})
module.exports = FirebaseAdmin