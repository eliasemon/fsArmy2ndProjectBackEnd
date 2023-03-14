const router =  require('express').Router();


router.get('/auth/google', (req, res) => {
    const oauth2Client = req.app.get("oauth2Client")
    const url = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: [
        'https://www.googleapis.com/auth/calendar',
        'https://www.googleapis.com/auth/calendar.events'
      ],
      state : `${req.user.uid}`
    });
    res.redirect(url);
  });
  


module.exports = router;






// const express = require('express');
// const session = require('express-session');
// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

// const app = express();

// // Set up the session middleware
// app.use(session({
//   secret: 'YOUR_SESSION_SECRET',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true }
// }));

// // Set up Passport.js
// passport.use(new GoogleStrategy({
//     clientID: 'YOUR_CLIENT_ID',
//     clientSecret: 'YOUR_CLIENT_SECRET',
//     callbackURL: '/auth/google/callback'
//   },
//   (accessToken, refreshToken, profile, done) => {
//     // This function is called when the user has authenticated
//     // You can use the user information in the `profile` object to create a user account in your database or retrieve an existing one
//     return done(null, profile);
//   }
// ));

// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser((user, done) => {
//   done(null, user);
// });

// app.use(passport.initialize());
// app.use(passport.session());

// // Redirect the user to the Google OAuth2 consent screen
// app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// // Handle the Google OAuth2 callback
// app.get('/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   (req, res) => {
//     // This function is called when the user has authenticated successfully
//     res.redirect('/dashboard');
//   }
// );

// // Protect the dashboard route with a middleware that checks if the user is authenticated
// app.get('/dashboard', ensureAuthenticated, (req, res) => {
//   res.send(`Welcome ${req.user.displayName}!`);
// });

// function ensureAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   res.redirect('/login');
// }

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });





// const { google } = require('googleapis');
// const express = require('express');
// const session = require('express-session');
// const { OAuth2Client } = require('google-auth-library');
// const app = express();

// // Set up the OAuth2 client
// const client_id = 'YOUR_CLIENT_ID';
// const client_secret = 'YOUR_CLIENT_SECRET';
// const redirect_uri = 'YOUR_REDIRECT_URI';
// const oauth2Client = new OAuth2Client(client_id, client_secret, redirect_uri);

// // Set up the Google Calendar API
// const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

// // Set up the session middleware
// app.use(session({
//   secret: 'YOUR_SESSION_SECRET',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true }
// }));

// // Redirect the user to the Google OAuth2 consent screen
// app.get('/oauth2', (req, res) => {
//   const authUrl = oauth2Client.generateAuthUrl({
//     access_type: 'offline',
//     scope: [
//       'https://www.googleapis.com/auth/calendar',
//       'https://www.googleapis.com/auth/calendar.events'
//     ]
//   });
//   res.redirect(authUrl);
// });

// // Handle the Google OAuth2 callback
// app.get('/oauth2callback', async (req, res) => {
//   const { code } = req.query;
//   const { tokens } = await oauth2Client.getToken(code);
//   oauth2Client.setCredentials(tokens);
//   res.redirect('/create-event');
// });

// // Create a calendar event with a Google Meet link
// app.get('/create-event', async (req, res) => {
//   // Check if the user is authenticated
//   if (!req.session || !req.session.tokens) {
//     res.redirect('/oauth2');
//     return;
//   }

//   // Set the OAuth2 credentials
//   oauth2Client.setCredentials(req.session.tokens);

//   // Create the calendar event with a Google Meet link
//   const event = {
//     summary: 'Test Event',
//     location: 'Online',
//     description: 'This is a test event with a Google Meet link',
//     start: {
//       dateTime: '2023-03-10T10:00:00-07:00',
//       timeZone: 'America/Los_Angeles'
//     },
//     end: {
//       dateTime: '2023-03-10T11:00:00-07:00',
//       timeZone: 'America/Los_Angeles'
//     },
//     conferenceData: {
//       createRequest: {
//         requestId: Math.random().toString(36).substring(7),
//         conferenceSolutionKey: {
//           type: 'hangoutsMeet'
//         }
//       }
//     }
//   };
//   const { data } = await calendar.events.insert({
//     calendarId: 'primary',
//     resource: event,
//     conferenceDataVersion: 1
//   });

//   // Redirect the user to the newly created event
//   res.redirect(data.htmlLink);
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });
