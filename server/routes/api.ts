const express = require('express');
const router = express.Router();

var queries = require('../queries/user-queries');

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.json(router.stack.map(item => { 
    return { route: item.route.path, methods: item.route.methods }
   }));
});

/**
 * @api {get} /posts/ Get All Posts
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
 * @api {get} /users/ Get All Users
 * @apiName GetUsers
 * @apiGroup Users
 * 
 * @apiSuccess {Users[]}  -                    Array of users.
 * @apiSuccess {Users}    -                    User.
 * @apiSuccess {String}   -.firstName          The First Name.
 * @apiSuccess {String}   -.lastName           The Last Name.
 * 
 */
router.get('/users', (req, res) => {
  queries.getAllUsers()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).send(error)
    });
})

/**
 * @api {get} /user/:id Request User Information
 * @apiName GetUser
 * @apiGroup Users
 * 
 * @apiParam {Number} id Users unique ID.
 * 
 * @apiSuccess {Users}    -                    User.
 * @apiSuccess {String}   -.firstName          The First Name.
 * @apiSuccess {String}   -.lastName           The Last Name.
 * @apiSuccess {Date}     -.birthDate          The Birth Date.
 * 
 */
router.get('/user/:id', (req, res) => {
  queries.getUser(req.params.id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

module.exports = router;