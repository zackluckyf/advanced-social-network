var express = require('express');
var router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

var routeBuilder = path => {

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
  router.get(`${path}`, (req, res) => {
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
  
  return router;
}


module.exports = routeBuilder;