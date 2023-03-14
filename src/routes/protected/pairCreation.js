const router =  require('express').Router();

router.get('/pairCreation', async (req, res) => {
    
    // Check if the user is authenticated
    if (!req.session || !req.session.tokens) {
      res.redirect('/oauth2');
      return;
    }
  
    // Set the OAuth2 credentials
    oauth2Client.setCredentials(req.session.tokens);
  
    // Create the calendar event with a Google Meet link
    const event = {
      summary: 'Test Event',
      location: 'Online',
      description: 'This is a test event with a Google Meet link',
      start: {
        dateTime: '2023-03-10T10:00:00-07:00',
        timeZone: 'America/Los_Angeles'
      },
      end: {
        dateTime: '2023-03-10T11:00:00-07:00',
        timeZone: 'America/Los_Angeles'
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
    const { data } = await calendar.events.insert({
      calendarId: 'primary',
      resource: event,
      conferenceDataVersion: 1
    });
  
    // Redirect the user to the newly created event
    res.redirect(data.htmlLink);
  });

module.exports = router;