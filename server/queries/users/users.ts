var models = require('../../../models').getModels();
import * as moment from 'moment';

let getUserNameAndBirthday = async (userId: number) => {
    let res = await models.users.find({
      attributes: [ 'firstName', 'lastName', 'birthDate' ],
      where: {
        id: userId
      }
    });
    return res;
};

let getAllUsers = async () => {
  let res = await models.users.findAll({
      attributes: [ 'firstName', 'lastName' ]
    });
    return res;
};

let getUserPosts = async (userId: number) => {
  let res = await models.posts.findAll({
    attributes: [ 'postText' ],
    where: {
      user_id: userId
    }
  });
  return res;
};

let getUserComments = async (userId: number) => {
  let res = await models.comments.findAll({
    attributes: [ 'commentText' ],
    where: {
      user_id: userId
    }
  });
  return res;
};

let deleteUser = async (name: string) => {
    let res = await models.test_data.destroy({
      where: {
        name: name
      }
    });
    return res;
}

let createUser = async (user: any) => {
  let res = await models.users.create({
      firstName: user.firstName,
      lastName: user.lastName,
      birthday: user.birthday,
      username: user.username,
      email: user.email,
      password: user.password
  });
  return res;
}

let changeUserAge = async (user: any) => {
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
};

let getListOfUsers = async (query: string) => {
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
};

let getUser = async (email: string) => {
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
};

let getUserJwt = async (jwt: string) => {
  let res = await models.users.findOne({ 
    where: {
      id: jwt
    }
  });
  return res;
};

let changePassword = async (passwordResetToken: string) => {
  let res = await models.users.findOne({
    where: {
      reset_password_token: passwordResetToken
    }
  });
  return res;
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