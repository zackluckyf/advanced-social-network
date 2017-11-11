'use strict';

module.exports = (sequelize, DataTypes) => {
  var posts = sequelize.define('posts', {
    userId: {
      field: 'user_id', 
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
          posts.belongsTo(models.users);
          posts.hasMany(models.comments);
      }
    },
    timestamps:false
  });
  return posts;
};