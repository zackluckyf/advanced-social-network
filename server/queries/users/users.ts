var models = require('../../../models').getModels();
import * as moment from 'moment';

let getUserNameAndBirthday = async (userId: number) => {
    try {
      let res = await models.users.find({
        attributes: [ 'firstName', 'lastName', 'birthDate' ],
        where: {
          id: userId
        }
      });
      return res;
    } catch(e) {
      e => console.log(e.stack)
    } 
};

let getAllUsers = async () => {
  try {
    let res = await models.users.findAll({
        attributes: [ 'firstName', 'lastName' ]
      });
      return res;
    } catch(e) {
      e => console.log(e.stack)
    };
};

let getUserPosts = async (userId: number) => {
  try {
    let res = await models.posts.findAll({
      attributes: [ 'postText' ],
      where: {
        user_id: userId
      }
    });
    return res;
  } catch(e) {
    e => console.log(e.stack)
  };
};

let getUserComments = async (userId: number) => {
  try {
    let res = await models.comments.findAll({
      attributes: [ 'commentText' ],
      where: {
        user_id: userId
      }
    });
    return res;
  } catch(e) {
    e => console.log(e.stack)
  };
};

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
    let res = await models.users.create({
      where: {
        firstName: user.firstName,
        lastName: user.lastName,
        birthday: user.birthday,
        username: user.username,
        email: user.email,
        password: user.password
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
};

let getListOfUsers = async (query: string) => {
  try {
    let res = await models.users.findAll({
        attributes: [ 'id', 'firstName', 'lastName' ],
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
};

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
};

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
};

let changePassword = async (passwordResetToken: string) => {
  try {
    let res = await models.users.findOne({
      where: {
        reset_password_token: passwordResetToken
      }
    });
    return res;
  } catch(e) {
    e => console.log(e.stack)
  };
};

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
  getUserJwt: getUserJwt,
  changePassword: changePassword
};