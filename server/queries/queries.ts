var postsQueries = require('./posts/posts');
var usersQueries = require('./users/users');

module.exports = {
    users: usersQueries,
    posts: postsQueries
};