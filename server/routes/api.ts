var express = require('express');
var router = express.Router();

const posts = require('./posts/posts');
const user = require('./user/user');

/* GET api listing. */
router.get('/', (req, res) => {
  let array = [];
  router.stack.filter(item => item.route)
              .forEach(item => {
                array.push({
                  route: item.route.path, 
                  methods: item.route.methods 
                })
              });
  router.stack.filter(item => item.name === 'router')
              .forEach(item => {
                item.handle.stack.forEach(handler => {
                  array.push({
                    route: handler.route.path,
                    methods: handler.route.methods 
                  })
                })
              })
  res.json(array);
});

router.use(posts('/posts'));
router.use(user('/user'));

module.exports = router;