'use strict';

module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    username: DataTypes.STRING,
    reset_password_token: DataTypes.STRING,
    reset_password_expires: DataTypes.DATE
  }, {
    classMethods: {
      associate: (models) => {
        users.hasMany(models.posts);
        users.hasMany(models.comments);
      }
    },
    timestamps:false
  });
  return users;
};