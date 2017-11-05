'use strict';

module.exports = (sequelize, DataTypes) => {
  var posts = sequelize.define('posts', {
    userId: {
      field: 'user_id', 
      type: DataTypes.INTEGER
    },
    postText: {
      field: 'post_text', 
      type: DataTypes.INTEGER
    }
  }, {
    classMethods: {
      associate: (models) => {
          posts.belongsTo(models.users);
          posts.hasMany(models.comments);
      }
    },
    timestamps:false
  });
  return posts;
};