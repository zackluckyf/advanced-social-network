var express = require('express');
var router = express.Router();

const ensureAuthentication = (req, res, next) => {
  if (req.isAuthenticated()) {
    // req.user is available for use here
    return next(); 
  }
  // denied. redirect to login
  res.status(401).send('Not Authorized!')
}

var routeBuilder = path => {

  router.get(`${path}/logout`, (req, res) => {
    req.logout();
    res.status(200).send('Logged out!');
  });

  // just need this method to work and we in business? 
  // then they should be able to login
  // after that may need to use jwt to make it work
  router.post(`${path}/login`, (req, res) => {
    let name = req.body.name;
    let password = req.body.password;
    // do verification stuff
    res.status(200).send('Authorized!')
  });

  return router;
}

module.exports = {
  routeBuilder: routeBuilder,
  ensureAuthentication: ensureAuthentication
}