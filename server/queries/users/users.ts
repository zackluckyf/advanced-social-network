var models = require('../../../models').getModels();
import * as moment from 'moment';

const getUserNameAndBirthday = (userId: number) => {
  return models.users.find({
    attributes: [ 'firstName', 'lastName', 'birthDate' ],
    where: {
      id: userId
    }
  });
};

const getAllUsers = () => {
  return models.users.findAll({
    attributes: [ 'firstName', 'lastName' ]
  });
};

const getUserPosts = (userId: number) => {
  return models.posts.findAll({
    attributes: [ 'postText' ],
    where: {
      user_id: userId
    }
  });
};

const getUserComments = (userId: number) => {
  return models.comments.findAll({
    attributes: [ 'commentText' ],
    where: {
      user_id: userId
    }
  });
};

const deleteUser = (name: string) => {
  return models.test_data.destroy({
    where: {
      name: name
    }
  });
}

const createUser = (user: any) => {
  return models.users.create({
      firstName: user.firstName,
      lastName: user.lastName,
      birthday: user.birthday,
      username: user.username,
      email: user.email,
      password: user.password
  });
}

const changeUserAge = (user: any) => {
  return models.test_data.update({
    age: user.age
  }, {
    where: {
      name: user.name
    }, 
    returning: true,
    plain: true
  });
};

const getListOfUsers = (query: string) => {
  return models.users.findAll({
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
};

const getUser = (email: string) => {
  return models.users.findOne({ 
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
};

const getUserJwt = (jwt: string) => {
  return models.users.findOne({ 
    where: {
      id: jwt
    }
  });
};

const changePassword = (passwordResetToken: string) => {
  return models.users.findOne({
    where: {
      reset_password_token: passwordResetToken
    }
  });
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