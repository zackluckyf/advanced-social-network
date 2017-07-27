'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    },
    timestamps:false
  });
  return users;
};