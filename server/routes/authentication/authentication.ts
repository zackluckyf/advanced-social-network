var express = require('express');
var router = express.Router();

var _ = require("lodash");
var bodyParser = require("body-parser");
var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;
var jwt = require('jsonwebtoken');
var passportJWT = require("passport-jwt");
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;
const nodemailer = require('nodemailer');
var models = require('../../../models').getModels();

const localOptions = { usernameField: 'email' };

var jwtOptions = { 
  secretOrKey: process.env.SECRET || 'secret',
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

var token;
var payload;

passport.use(new JwtStrategy(jwtOptions, (jwt_payload, next) => {
  console.log('payload received', jwt_payload);
  models.users.findOne({ 
    where: {
      id: jwt_payload.id
    }
  }).then(user => {
    if (user) {
      next(null, user);
    } else {
      next(null, false);
    }
  }).catch(err => next(err));
}));

passport.use(new LocalStrategy(localOptions,(email, password, done) => {
  models.users.findOne({ 
    where: {
      $or: [
        {
          email: email
        },
        {
          username: email
        }
      ]
    }
  }).then(user => {
    if (user == null) {
      return done(null, false, { message: 'Incorrect Username' })
    }
    if (user.password === password) {
      payload = { id: user.id };
      token = jwt.sign(payload, jwtOptions.secretOrKey, { expiresIn: 1000000})
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
    res.json({ message: "Authorized", id: payload.id, token: token });
  });

  return router;
}

module.exports = {
  routeBuilder: routeBuilder,
  ensureAuthentication: ensureAuthentication
}