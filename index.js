require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');

const WebSocket = require('ws');
const ws = new WebSocket.Server({ port: 8080 });

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// connect to mongoDB
require('./server-components/services/mongoose');

// import Schemas
require('./server-components/schemas/Message');
require('./server-components/schemas/User');

// import passport strategies
require('./server-components/services/passport');

// Use session
app.use(
  session({
    secret: 'asjdaslidujicnweoicjwsedasda',
    resave: false,
    saveUninitialized: false,
  })
);

// Make express use the passport strategies
app.use(passport.initialize());
app.use(passport.session());

// authroutes
require('./server-components/routes/authRoutes')(app, ws);
// request routes
require('./server-components/routes/reqRoutes')(app);

let port = process.env.PORT;
if (port == null || port == '') {
  port = 5000;
}
app.listen(port, () => {
  console.log('Server started at port ' + port);
});
