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
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;