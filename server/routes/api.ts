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

router.use(posts('/posts'));
router.use(users('/users'));

module.exports = router;