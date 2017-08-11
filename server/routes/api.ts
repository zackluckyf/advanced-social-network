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
});

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
});

/**
 * @api {get} /user/:id/allposts Request All User Posts
 * @apiName GetUserPosts
 * @apiGroup Users
 * 
 * @apiParam {Number} id Users unique ID.
 * 
 * @apiSuccess {Posts[]}  -                    Array of user Posts.
 * @apiSuccess {String}   -.postText           The Post Text.
 * 
 */
router.get('/user/:id/allposts', (req, res) => {
  queries.getUserPosts(req.params.id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).send(error);
    })
});

/**
 * @api {get} /user/:id/allcomments Request All User Comments
 * @apiName GetUserComments
 * @apiGroup Users
 * 
 * @apiParam {Number} id Users unique ID.
 * 
 * @apiSuccess {Comments[]}  -                    Array of Comment Text.
 * @apiSuccess {String}      -.commentText        The Comment Text.
 * 
 */
router.get('/user/:id/allcomments', (req, res) => {
  queries.getUserComments(req.params.id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).send(error);
    })
});

/**
 * @api {delete} /user/:name Delete User
 * @apiName DeleteUser
 * @apiGroup Users
 * 
 * @apiParam {name} a user's name.
 * 
 * @apiSuccess {Success}      -.success        Success object.
 * 
 */
router.delete('/user/:name', (req, res) => {
  queries.deleteUser(req.params.name)
    .then(success => {
      res.status(200).json(success);
    })
    .catch(error => {
      res.status(500).send(error);
    })
});

module.exports = router;