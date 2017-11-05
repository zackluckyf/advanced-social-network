'use strict';

module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    firstName: {
      field: 'first_name', 
      type: DataTypes.STRING
    },
    lastName: {
      field: 'last_name', 
      type: DataTypes.STRING
    },
    birthDate: {
      field: 'birth_date', 
      type: DataTypes.DATE
    },
    resetPasswordToken: {
      field: 'reset_password_token', 
      type: DataTypes.STRING
    },
    resetPasswordExpires: {
      field: 'reset_password_expires', 
      type: DataTypes.STRING
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING
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