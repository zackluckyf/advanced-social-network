var express = require('express');
var router = express.Router();

const authentication = require('./authentication/authentication');
const posts = require('./posts/posts');
const users = require('./users/users');

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


// authentication routes
router.use(authentication.routeBuilder('/authentication'));

// configured routes
router.use(posts('/posts'), authentication.ensureAuthentication);
router.use(users('/users'), authentication.ensureAuthentication);

module.exports = router;