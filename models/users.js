'use strict';

var moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    firstName: {
      field: 'first_name', 
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
        notEmpty: true
      }
    },
    lastName: {
      field: 'last_name', 
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
        notEmpty: true
      }
    },
    birthDate: {
      field: 'birth_date', 
      type: DataTypes.DATE,
      validate: {
        isDate: true,
        isBefore: moment(new Date()).format('YYYY-MM-DD')
      }
    },
    resetPasswordToken: {
      field: 'reset_password_token', 
      type: DataTypes.STRING
    },
    resetPasswordExpires: {
      field: 'reset_password_expires', 
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: true,
        notEmpty: true
      }
    }
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