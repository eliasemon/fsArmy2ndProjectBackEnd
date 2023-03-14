const createError = require('http-errors');
const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const router = require(path.join(__dirname + '/src/routes/index.js'))

require('./src/services/globals/firebaseConnection')
require('./src/services/globals/dbConnection.js')


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

const sessionData = {};

// define a custom session store
const customSessionStore = {
  get: (sessionId) => {
    // retrieve the session data by session ID
    const data = sessionData[sessionId];
    return data
  },
  set: (sessionId, sessionDSata) => {
    // store the session data in the in-memory object
    sessionData[sessionId] = sessionData;
    return "success"
    // invoke the callback function to signal that the data has been stored
  },
  destroy: (sessionId, callback) => {
    // remove the session data from the in-memory object
    delete sessionData[sessionId];
    // invoke the callback function to signal that the data has been removed
    return "success"
  },
};
app.set("customSession" , customSessionStore)

app.use(session({
  secret: 'Lenovo',
  resave: false,
  saveUninitialized: true,
}));

const { OAuth2Client } = require('google-auth-library');

const CLIENT_ID = '902448492506-t3o75lu56lro7d9g70jaqahjba2s8a0k.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'http://localhost:3000/auth/google/callback';

const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
app.set('oauth2Client' ,oauth2Client )

app.use(router)





// catch 404 and forward to error handler
app.use((req, res, next) => {
  // next(createError(404));
  res.send("No route Found")
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   // res.locals.error = req.app.get('env') === 'development' ? err : {};
//   res.locals.error =  {"message" : "Routes Not Found"};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.listen(3000 , () =>{
  console.log("Server Listening on port 3000")
})

