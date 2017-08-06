let models = require('../../models').getModels();

let getUser = async (userId: number) => {
    try {
      let res = await models.users.find({
        attributes: [ ['first_name', 'firstName'], ['last_name', 'lastName'], ['birth_date', 'birthDate'] ],
        where: {
          id: userId
        }
      });
      return res;
    } catch(e) {
      e => console.log(e.stack)
    } 
}

let getAllUsers = async () => {
  try {
    let res = await models.users.findAll({
        attributes: [ ['first_name', 'firstName'], ['last_name', 'lastName'] ]
      });
      return res;
    } catch(e) {
      e => console.log(e.stack)
    };
}

let getUserPosts = async (userId: number) => {
  try {
    let res = await models.posts.findAll({
      attributes: [ ['post_text', 'postText'] ],
      where: {
        user_id: userId
      }
    });
    return res;
  } catch(e) {
    e => console.log(e.stack)
  };
}

let getUserComments = async (userId: number) => {
  try {
    let res = await models.comments.findAll({
      attributes: [ ['comment_text', 'commentText'] ],
      where: {
        user_id: userId
      }
    });
    return res;
  } catch(e) {
    e => console.log(e.stack)
  };
}

module.exports = {
  getUser: getUser,
  getAllUsers: getAllUsers,
  getUserPosts: getUserPosts,
  getUserComments: getUserComments
};