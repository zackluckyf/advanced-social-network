'use strict';

module.exports = (sequelize, DataTypes) => {
  var comments = sequelize.define('comments', {
    userId: {
      field: 'user_id', 
      type: DataTypes.INTEGER
    },
    postId: {
      field: 'post_id', 
      type: DataTypes.INTEGER
    },
    postText: {
      field: 'post_text', 
      type: DataTypes.INTEGER
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