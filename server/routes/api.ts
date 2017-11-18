var express = require('express');
var router = express.Router();

var passport = require("passport");

const authentication = require('./authentication/authentication');
const posts = require('./posts/posts');
const users = require('./users/users');

const requireAuth = passport.authenticate('jwt', { session: false });

/* GET api listing. */
// Uncomment and navigate to /api to see the full route tree XD
// router.get('/', (req, res) => {
//   let array = [];
//   router.stack.forEach(item => {
//     if(item.route){
//       array.push({
//         route: item.route.path, 
//         methods: item.route.methods 
//       })
//     } else {
//       item.handle.stack.forEach(handler => {
//         array.push({
//           route: handler.route.path,
//           methods: handler.route.methods 
//         })
//       })
//     }
//   });
//   res.json(array);
// });

// add validation to models using: http://docs.sequelizejs.com/manual/tutorial/models-definition.html#model-validations

// authentication routes
router.use(authentication('/authentication'));

// configured routes
router.use(posts('/posts'), requireAuth);
router.use(users('/users'), requireAuth);

module.exports = router;