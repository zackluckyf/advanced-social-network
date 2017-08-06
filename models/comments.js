'use strict';

module.exports = (sequelize, DataTypes) => {
  var comments = sequelize.define('comments', {
    user_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER,
    post_text: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
          comments.belongsTo(models.users);
          comments.belongsTo(models.posts);
      }
    },
    timestamps:false
  });
  return comments;
};