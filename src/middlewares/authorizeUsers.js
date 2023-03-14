const {getAuth} = require('firebase-admin/auth')
authorizeUsers = async (req, res, next) =>{
    // // const authToken = req.headers['authorization'] ? req.headers['authorization'].split(" ") : null;
    // // if(!authToken) {
    // //     res.status(403).json({message : "unauthorized Request"});
    // //     return
    // // }
    // const {verifyIdToken} =  getAuth()
    // try {
    //     const decodedToken = await verifyIdToken(authToken[1]);
    //     req.user.uid = decodedToken.uid;
    //     next()
    // } catch (error) {
    //     res.status(403).json({message : "unauthorized Request"});
    //     return
    // } 
    console.log(req.headers['Authorization'] , "unexpected")
    req.user = {}
    req.user.uid = `sadf33ee541b-95dd-23-d44d-7ef3d1`
    next()

}
module.exports = authorizeUsers