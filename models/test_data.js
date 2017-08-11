'use strict';

module.exports = (sequelize, DataTypes) => {
  var test_data = sequelize.define('test_data', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: (models) => {
          // no current associations
      }
    },
    timestamps:false
  });
  return test_data;
};