const passport = require('passport');
const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = (app, ws) => {
  app.route('/authme/google').get((req, res) => {
    res.redirect('/auth/google');
  });

  app.route('/auth/google').get(
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app
    .route('/auth/google/callback')
    .get(
      passport.authenticate('google', { failureRedirect: '/signin' }),
      (req, res) => {
        console.log('Successfully logged in.');
        // res.header("Access-Control-Allow-Origin", "*");
      }
    );

  app
    .route('/signup')

    .post((req, res) => {
      console.log(req.body);
      const username = req.body.username;
      const password = req.body.password;
      const givenName = req.body.givenName;
      const familyName = req.body.familyName;
      const email = req.body.username;

      User.register(
        new User({
          username: username,
          givenName: givenName,
          familyName: familyName,
          email: email,
        }),
        password,
        (err, account) => {
          if (err) {
            console.log(err);
            res.json({ error: err.message });
          } else {
            passport.authenticate('local')(req, res, function (result) {
              res.redirect('/api/user');
            });
          }
        }
      );
    });

  app.get('/api/user', (req, res, next) => {
    console.log(req.isAuthenticated());
    console.log('checking authenticated user');
    if (req.isAuthenticated()) {
      console.log('auth?');
      console.log(req.user);

      res.json({
        isAuthenticated: req.isAuthenticated(),
        data: {
          id: req.user.id,
          username: req.user.username,
          givenName: req.user.givenName,
          familyName: req.body.familyName,
          email: req.user.username,
          contacts: req.user.contacts,
        },
      });
    }
  });

  app
    .route('/signin')

    .post((req, res) => {
      console.log(req.body);

      // // websocket
      // console.log('web socket');
      // ws.on('connection', function connection(wsConnection) {
      //   wsConnection.on('message', function incoming(message) {
      //     console.log(`server received: ${message}`);
      //   });

      //   const userInfo = {
      //     id: req.user.id,
      //     email: req.user.email,
      //     givenName: req.user.givenName,
      //     familyName: req.user.familyName,
      //     contacts: req.user.contacts,
      //   };
      //   const user = {
      //     user: userInfo,
      //     isAuthenticated: req.isAuthenticated(),
      //   };

      //   console.log(user);
      //   wsConnection.send(JSON.stringify(user));
      // });
      
      //

      const userCredentials = new User({
        username: req.body.username,
        password: req.body.password,
      });
      console.log(req.body.username);
      console.log(req.body.password);
      console.log('Checking user credentials...');
      req.login(userCredentials, (err) => {
        if (err) {
          console.log('Some error occured!');
          console.log(err);
        } else {
          console.log('Authenticating user...');
          passport.authenticate('local')(req, res, () => {
            console.log('User is authenticated');

            ws.on('open', function open() {
              console.log("asdasda")
              const userInfo = {
                id: req.user.id,
                email: req.user.email,
                givenName: req.user.givenName,
                familyName: req.user.familyName,
                contacts: req.user.contacts,
              };
              const user = {
                user: userInfo,
                isAuthenticated: req.isAuthenticated(),
              };
              // ws.send(JSON.stringify(user));
              ws.send('Hi')
            });
          });
        }
      });
    });

  // app.post('/login', passport.authenticate('local'), (req, res) => {
  //   console.log('PLEASE TRIGGER ME!');
  //   res.json({ message: 'Success', user: req.user });
  // });

  app.route('/logout').get((req, res) => {
    req.logout();
    res.redirect('/');
  });
};
