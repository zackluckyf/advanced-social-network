const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.json(router.stack);
});

/**
 * @api {get} /posts/ Get all posts
 * @apiName GetPosts
 * @apiGroup Posts
 * 
 * @apiSuccess {Posts[]}  -         Array of posts.
 * @apiSuccess {Number}   -.userId  The User ID.
 * @apiSuccess {Number}   -.id      The ID.
 * @apiSuccess {String}   -.title   The Title.
 * @apiSuccess {String}   -.body    The Body.
 */
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to Postgres
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

/**
 * @api {get} /users/ Get all users
 * @apiName GetUsers
 * @apiGroup Users
 * 
 * @apiSuccess {Users[]}  -                     Array of users.
 * @apiSuccess {Number}   -.id                  The ID.
 * @apiSuccess {String}   -.name                The Name.
 * @apiSuccess {String}   -.username            The Username.
 * @apiSuccess {String}   -.email               The Email.
 * @apiSuccess {Object}   -.address             The Address.
 * @apiSuccess {String}   -.address.street      The Street.
 * @apiSuccess {String}   -.address.suite       The Suite.
 * @apiSuccess {String}   -.address.city        The City.
 * @apiSuccess {String}   -.address.zipcode     The Zipcode.
 * @apiSuccess {Object}   -.address.geo         The Geo.
 * @apiSuccess {String}   -.address.geo.lat     The Latitude.
 * @apiSuccess {String}   -.address.geo.lng     The Longitude.
 * @apiSuccess {String}   -.phone               The Phone.
 * @apiSuccess {String}   -.website             The Website.
 * @apiSuccess {Object}   -.company             The Company.
 * @apiSuccess {String}   -.company.name        The Company Name.
 * @apiSuccess {String}   -.company.catchPhrase The Company CatchPhrase.
 * @apiSuccess {String}   -.company.bs          The Company Business Strategy.
 * 
 */
router.get('/users', (req, res) => {
  // Get users from the mock api
  // This should ideally be replaced with a service that connects to Postgres
  axios.get(`${API}/users`)
    .then(users => {
      res.status(200).json(users.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
})

module.exports = router;