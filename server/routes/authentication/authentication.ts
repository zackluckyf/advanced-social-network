var express = require('express');
var router = express.Router();

var models = require('../../../models').getModels();

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

const localOptions = { usernameField: 'email' };

passport.use(new LocalStrategy(localOptions,
  (email, password, done) => {
    models.users.findOne({ 
      where: {
        email: email
      }
    }).then(user => {
      if (user == null) {
        return done(null, false, { message: 'Incorrect Username' })
      }
      if (user.password === password) {
        return done(null, user)
      }
      return done(null, false, { message: 'Incorrect Password' })
    }).catch(err => done(err));
}));

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
  models.users.findById(id, (err, user) => {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

const ensureAuthentication = (req, res, next) => {
  if (req.isAuthenticated()) {
    // req.user is available for use here
    return next(); 
  }
  // denied. redirect to login
  res.status(401).send({ message: 'Unauthorized' });
}

var routeBuilder = path => {

  router.get(`${path}/logout`, (req, res) => {
    req.logout();
    res.status(200).send({ message: 'Logged Out' });
  });

  router.post(`${path}/login`, passport.authenticate('local', { session: false }), (req, res) => {
    res.status(200).send({ message: 'Authorized', id: req.user.id });
  });

  return router;
}

module.exports = {
  routeBuilder: routeBuilder,
  ensureAuthentication: ensureAuthentication
}