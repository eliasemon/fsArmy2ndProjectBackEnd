const router =  require('express').Router();
const { google } = require('googleapis');

router.post('/groupdiscussion', async (req,res)=>{
    const userId = req.user.userId
    const oauth2Client = req.app.get("oauth2Client")
    const customSession = req.app.get("customSession")
    const authTokensAndCode = customSession.get(userId)
    if(!authTokensAndCode) {
        res.redirect("/auth/google")
    }
    oauth2Client.setCredentials(req.session.tokens);
    const {summary , location , description} = req.body

    // Create the calendar event with a Google Meet link
      const event = {
        summary: summary,
        location: location,
        description: description,
        start: {
          dateTime: Date.now(),
          timeZone: 'Bangladesh/Dhaka'
        },
        end: {
          dateTime: null,
          timeZone: 'Bangladesh/Dhaka'
        },
        conferenceData: {
          createRequest: {
            requestId: Math.random().toString(36).substring(7),
            conferenceSolutionKey: {
              type: 'hangoutsMeet'
            }
          }
        }
      };
      const { data } = await google.calendar.events.insert({
        calendarId: 'primary',
        resource: event,
        conferenceDataVersion: 1
      });
    
      // Redirect the user to the newly created event
      await setGroupDiscussionTodb(data) // service Function
    //   res.redirect(data.htmlLink);
      res.json(data)
});

module.exports = router;