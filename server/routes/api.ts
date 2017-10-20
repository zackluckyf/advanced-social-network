var express = require('express');
var router = express.Router();

const posts = require('./posts/posts');
const users = require('./users/users');

/* GET api listing. */
router.get('/', (req, res) => {
  let array = [];
  router.stack.forEach(item => {
    if(item.route){
      array.push({
        route: item.route.path, 
        methods: item.route.methods 
      })
    } else {
      item.handle.stack.forEach(handler => {
        array.push({
          route: handler.route.path,
          methods: handler.route.methods 
        })
      })
    }
  });
  res.json(array);
});

// authentication routes
router.get('/logout', (req, res) => {
  console.log('logging out');
  req.logout();
  res.json({ location: '/login' });
});

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    // req.user is available for use here
    return next(); 
  }
  // denied. redirect to login
  res.redirect('/')
}

router.get('/protected', ensureAuthenticated, (req, res) => {
  res.json({ text: "access granted. secure stuff happens here" });
});

router.use(posts('/posts'));
router.use(users('/users'));

module.exports = router;