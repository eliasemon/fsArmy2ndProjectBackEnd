const router =  require('express').Router();
const { google } = require('googleapis');

// const generateUniqueId = () => {
//   const timestamp = Date.now().toString(16);
//   const randomNumber = Math.floor(Math.random() * 16 ** 6).toString(16);
//   return timestamp + randomNumber;
// }


  router.get('/auth/google/callback', async (req, res) => {
    const oauth2Client = req.app.get("oauth2Client")
    const customSession = req.app.get("customSession")

    const { code , state} = req.query;
    
    const  data  =  oauth2Client.getToken(code)
    data.then(({tokens})=>{
      const data = {code : code , tokens : tokens}
      customSession.set(state , data )
// Front-end microservice route
      // res.redirect('/**Front-end route**');
      return
    })
  });

module.exports = router;