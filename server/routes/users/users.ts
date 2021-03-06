var express = require('express');
var router = express.Router();

var queries = require('../../queries/queries');

var routeBuilder = path => {

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
  router.get(`${path}/:id`, (req, res, next) => {
    queries.users.getUserNameAndBirthday(req.params.id)
    .then(users => res.status(200).json(users))
    .catch(error => next(error));
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
  router.get(`${path}/:id/allposts`, (req, res, next) => {
    queries.users.getUserPosts(req.params.id)
    .then(users => res.status(200).json(users))
    .catch(error => next(error));
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
  router.get(`${path}/:id/allcomments`, (req, res, next) => {
    queries.users.getUserComments(req.params.id)
    .then(users => res.status(200).json(users))
    .catch(error => next(error));
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
  router.delete(`${path}/:name`, (req, res, next) => {
    queries.users.deleteUser(req.params.name)
    .then(success => res.status(200).json(success))
    .catch(error => next(error));
  });


  /**
   * @api {put} /user/:name/:age Change User Age
   * @apiName ChangeUserAge
   * @apiGroup Users
   * 
   * @apiParam {name} a user's name.
   * @apiParam {age} a user's age.
   * 
   * @apiSuccess {Success}      -.success        Success object.
   * 
   */
  router.put(`${path}/:name/:age`, (req, res, next) => {
    let user = {
      name: req.params.name,
      age: req.params.age
    }
    queries.users.changeUserAge(user)
      .then(success => res.status(200).json(success))
      .catch(error => next(error))
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
  router.get(`${path}`, (req, res, next) => {
    queries.users.getAllUsers()
      .then(users => res.status(200).json(users))
      .catch(error => next(error));
  });

  /**
   * @api {get} /search/:query Get All Users that match query
   * @apiName GetListOfUsers
   * @apiGroup Users
   * 
   * @apiParam {query} search query.
   * 
   * @apiSuccess {Users[]}  -                    Array of users.
   * @apiSuccess {Users}    -                    User.
   * @apiSuccess {String}   -.firstName          The First Name.
   * @apiSuccess {String}   -.lastName           The Last Name.
   * 
   */
  router.get(`${path}/search/:query`, (req, res, next) => {
    let query = req.params.query;
    queries.users.getListOfUsers(query)
      .then(users => res.status(200).json(users))
      .catch(error => next(error));
  });


  return router;
}

module.exports = routeBuilder;