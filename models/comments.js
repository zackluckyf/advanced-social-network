'use strict';

module.exports = (sequelize, DataTypes) => {
  var comments = sequelize.define('comments', {
    userId: {
      field: 'user_id', 
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true
      }
    },
    postId: {
      field: 'post_id', 
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true
      }
    },
    postText: {
      field: 'post_text', 
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
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