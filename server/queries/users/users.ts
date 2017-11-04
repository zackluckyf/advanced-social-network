var models = require('../../../models').getModels();

let getUserNameAndBirthday = async (userId: number) => {
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

let deleteUser = async (name: string) => {
  try {
    let res = await models.test_data.destroy({
      where: {
        name: name
      }
    });
    return res;
  } catch(e) {
    e => console.log(e.stack)
  };
}

let createUser = async (user: any) => {
  try {
    let res = await models.test_data.findOrCreate({
      where: {
        name: user.name,
        age: user.age
      }
    });
    return res;
  } catch(e) {
    e => console.log(e.stack)
  };
}

let changeUserAge = async (user: any) => {
  try {
    let res = await models.test_data.update({
      age: user.age
    }, {
      where: {
        name: user.name
      }, 
      returning: true,
      plain: true
    });
    return res;
  } catch(e) {
    e => console.log(e.stack)
  };
}

let getListOfUsers = async (query: string) => {
  try {
    let res = await models.users.findAll({
        attributes: [ 'id', ['first_name', 'firstName'], ['last_name', 'lastName'] ],
        where: {
          $or: [
            {
              first_name: {
                $ilike: `%${query}%`
              }
            },
            {
              last_name: {
                $ilike: `%${query}%`
              }
            }
          ]
        },
        limit: 5
      });
    return res;
  } catch(e) {
    e => console.log(e.stack)
  };
}

let getUser = async (email: string) => {
  try {
    let res = await models.users.findOne({ 
      where: {
        $or: [
          {
            email: email
          },
          {
            username: email
          }
        ]
      }
    });
    return res;
  } catch(e) {
    e => console.log(e.stack)
  };
}

let getUserJwt = async (jwt: string) => {
  try {
    let res = await models.users.findOne({ 
      where: {
        id: jwt
      }
    });
    return res;
  } catch(e) {
    e => console.log(e.stack)
  };
}

module.exports = {
  getUserNameAndBirthday: getUserNameAndBirthday,
  getAllUsers: getAllUsers,
  getUserPosts: getUserPosts,
  getUserComments: getUserComments,
  deleteUser: deleteUser,
  createUser: createUser,
  changeUserAge: changeUserAge,
  getListOfUsers: getListOfUsers,
  getUser: getUser,
  getUserJwt: getUserJwt
};